import { Grid, Button } from '@mui/material';

import styles from './CreateUser.module.css';
import Input from '../../common/Input';

const CreateUser = props => {
  return (
    <div className={styles['wrap-field']}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Input 
            id='username'
            type='text'
            title='Username'
            name='username'
            placeholder='Please enter Username'
          />          
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input 
            id='password'
            type='password'
            title='Password'
            name='password'
            placeholder='Please enter password'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input 
            id='fullname'
            type='text'
            title='Fullname'
            name='fullname'
            placeholder='Please enter fullname'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input 
            id='phone'
            type='text'
            title='Phone'
            name='phone'
            placeholder='Please enter phone'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input 
            id='email'
            type='text'
            title='Email'
            name='email'
            placeholder='Please enter email'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input 
            id='avatar'
            type='file'
            title='Avatar'
            name='avatar'
            required={false}
            placeholder='Please choose image'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input 
            id='birthday'
            type='datetime'
            title='Birthday'
            name='birthday'
            required={false}
            placeholder='Please choose birthday'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input 
            id='sex'
            type='radio'
            title='Sex'
            name='sex'
            required={false}
            props={{
              data: [{
                name: 'Male',
                value: 0
              }, {
                name: 'Female',
                value: 1
              }],
              key: 'name',
              value: 'value'
            }}
            placeholder='Please enter fullname'
          />
        </Grid>

      </Grid>
      <div className={styles['wrap-btn']}>
        <Button variant="contained">SUBMIT</Button>
        <span>{' '}</span>
        <Button variant="contained" color='error'>CLEAR</Button>
      </div>
    </div>
  )
}

export default CreateUser;