import styles from './Contact.module.css';
import Map from './Map';
import Feedback from './Feedback';
import { Helmet } from 'react-helmet';
import { ClientLayoutContext } from '../../../contexts/providers/client/ClientLayoutProvider';
import { useContext } from 'react';

const Contact = (props) => {
  const { changeLang, t, lang } =
  useContext(ClientLayoutContext);

  return (
    <>
      <Helmet>
        <title>{t('contact_us')}</title>
        <meta name="description" content="Contact Us TienDa Store" />
      </Helmet>
      <Map />
      <Feedback />
    </>
  )
}

export default Contact;