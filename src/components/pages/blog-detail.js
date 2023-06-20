// import React, { Component } from "react";
// import axios from "axios";
// import { useNavigate, Link, useParams } from "react-router-dom";
// import { useEffect, useCallback } from "react";

// export default class BlogDetail extends Component {
//   constructor(props) {
//     super(props);
    
//     const  = (props) => {
//         const navigate = useNavigate();
//         const { id, slug } = useParams();
//     this.state = {
//       currentId: this.props.match.params.slug,
//       blogItem: {}
//     };
//   }

//   getBlogItem() {
//     axios
//       .get(
//         `https://javaco95.devcamp.space/portfolio/portfolio_blogs/${this.props.match.params.slug}`
//       )
//       .then(response => {
//         this.setState({
//           blogItem: response.data.portfolio_blog
//         });
//       })
//       .catch(error => {
//         console.log("getBlogItem error", error);
//       });
//   }
  

//   componentDidMount() {
//     this.getBlogItem();
//   }

//   render() {
//     const {
//       title,
//       content,
//       featured_image_url,
//       blog_status
//     } = this.state.blogItem;

//     return (
//       <div>
//         <h1>{title}</h1>
//         <img src={featured_image_url} />
//       </div>
//     );
//   }
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import BlogFeaturedImage from "../blog/blog-featured-image";


const BlogDetail = () => {
  const { slug } = useParams();
  const [blogItem, setBlogItem] = useState(null);

  useEffect(() => {
    const getBlogItem = async () => {
      try {
        const response = await axios.get(
          `https://javaco95.devcamp.space/portfolio/portfolio_blogs/${slug}`
        );
        setBlogItem(response.data.portfolio_blog);
      } catch (error) {
        console.log("getBlogItem error", error);
      }
    };

    getBlogItem();
  }, [slug]);

  if (!blogItem) {
    return <div>Loading...</div>;
  }

  const { title, content, featured_image_url, blog_status } = blogItem;
  
  

  return (
    <div className="blog-container">
        <div className="content-container">
        <h1>{title}</h1>

        <BlogFeaturedImage img={featured_image_url} />

        <div className="content">{ReactHtmlParser(content)}</div>
        </div>
        </div>
  );
};

export default BlogDetail;
