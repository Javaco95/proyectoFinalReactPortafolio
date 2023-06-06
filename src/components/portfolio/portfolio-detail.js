import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


export default function portfoliodetail(props) {
  return (
    <div>
        <h2>Portfolio Detail for {props.match.params.slug}</h2>
    </div>
  )
}
