import Map from './Map';
import Feedback from './Feedback';
import { Helmet } from 'react-helmet';
import { ClientLayoutContext } from '@providers/client/ClientLayoutProvider';
import { useContext } from 'react';

const Contact = (props) => {
  const { t } =
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