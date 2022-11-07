import styles from './Contact.module.css';
import Map from './Map';
import Feedback from './Feedback';
import { Helmet } from 'react-helmet';

const Contact = (props) => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us TienDa Store" />
      </Helmet>
      <Map />
      <Feedback />
    </>
  )
}

export default Contact;