import {
  Radio,
  RadioGroup,
  FormControlLabel
} from '@mui/material';
import styles from './Input.module.css';

const defaultFunc = () => {}

const Input = ({
  value = '', 
  title = '', 
  required = true,
  placeholder = '', 
  type = 'text',
  style = {},
  name = '',
  onChange = defaultFunc,
  onClick = defaultFunc,
  props = {},
  id = ''
}) => {
  switch(type) {
    case 'select':
      return (
        <div className={styles['field']}>
          {
            title &&           
            <label className={styles['label']} htmlFor={id}>{title}:{' '} 
              {
                required && <span className={styles['required']}>*</span>
              }
            </label>
          }
          <select 
            id={id}
            name={name} 
            required={required} 
            style={{...style}}  
            className={styles['input']}>
            <option value="" selected disabled hidden>
              {placeholder}
            </option>
            {
              props.data.map(item => {
                return (
                  <option value={props[value]}>{item[props.key]}</option>
                )
              })
            }
          </select>
          
        </div>
      )
    case 'radio':
      return (
        <div className={styles['field']}>
          {
            title &&           
            <label className={styles['label']} htmlFor={id}>{title}:{' '} 
              {
                required && <span className={styles['required']}>*</span>
              }
            </label>
          }

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={value}
            onChange={onChange}
            name={name}
            row={props.row}
          >
            {
              props.data.map((item, index) => {
                return (
                  <FormControlLabel value={item[props.value]} control={<Radio />} label={item[props.key]} key={index} />
                )
              })
            }
          </RadioGroup>
        </div>
      )
    case 'textarea':
      return (
        <div className={styles['field']}>
          {
            title &&           
            <label className={styles['label']} htmlFor={id}>{title}:{' '} 
              {
                required && <span className={styles['required']}>*</span>
              }
            </label>
          }

          <textarea
              className={styles['input']}       
              type={type} 
              placeholder={placeholder}
              required={required} 
              id = {id}
              style={{...style}}  
              onChange={onChange}
              onClick={onClick}
              name={name}
              {...props} />
        </div>
      )
    default :
      return (
        <div className={styles['field']}>
          {
            title &&           
            <label className={styles['label']} htmlFor={id}>{title}:{' '} 
              {
                required && <span className={styles['required']}>*</span>
              }
            </label>
          }

        <input
            className={styles['input']}
            type={type} 
            placeholder={placeholder} 
            required={required} 
            id = {id}
            style={{...style}}  
            onChange={onChange}
            onClick={onClick}
            name={name}
            value={value}
            {...props}
            />  
        </div>
      )

  }
} 

export default Input;

