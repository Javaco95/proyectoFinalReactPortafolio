import { faTrash, faSignOutAlt, faEdit, faBan, faSpinner, faFileCirclePlus, faPhone, faEnvelope, faMapLocation, faLock, faKey} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icons = () => {
  return library.add(faTrash, faSignOutAlt, faEdit, faBan, faSpinner, faFileCirclePlus, faPhone, faEnvelope, faMapLocation, faLock, faKey);
};

export default Icons;
