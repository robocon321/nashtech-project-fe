import { 
  Container, 
  Grid,
  Button
} from '@mui/material';

import styles from './DetailAccount.module.css';
import Input from '../../common/Input';
import { Helmet } from 'react-helmet';
import { ClientLayoutContext } from '../../../contexts/providers/client/ClientLayoutProvider';
import { useContext } from 'react';

const DetailAccount = props => {
  const { changeLang, t, lang } =
  useContext(ClientLayoutContext);

  return (
    <>
      <Helmet>
        <title>{t('my_account')}</title>
        <meta name="description" content="My Account TienDa Store" />
      </Helmet>
      <div className={styles['detail-account']}>
        <Container>
          <h1>Your personal detail</h1>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Input title='First name' name='first_name' id='first_name' value='Nguyen Thanh' />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input title='Last name' name='last_name' id='last_name' value='Nhat' />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input title='Phone' name='phone' id='phone' value='0365412411' />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input title='Email' name='email' id='email' value='robocon321n@gmail.com' required={true} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input type='date' title='Birthday' name='birthday' id='birthday' value='2000-01-12' required={false} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input type='radio' title='Sex' name='sex' id='sex' required={false} value='female'
                props={{
                  data: [{
                    label: 'Male',
                    value: 'male'
                  }, {
                    label: 'Female',
                    value: 'female'
                  }, {
                    label: 'Other',
                    value: 'other'
                  }],
                  row: true
                }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default DetailAccount;