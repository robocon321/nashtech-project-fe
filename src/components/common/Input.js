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
    case 'textarea':
      return (
        <div className={styles['field']}>
          <label htmlFor={id}>{title}:{' '} 
            {
              required && <span className={styles['required']}>*</span>
            }
          </label>
          <textarea         
              type={type} 
              placeholder={placeholder}
              required={required} 
              id = {id}
              style={{...style}}  
              onChange={onChange}
              onClick={onClick}
              name={name}
              {...props}>
            {value}
          </textarea>
        </div>

      )
    default :
      return (
        <div className={styles['field']}>
        <label htmlFor={id}>{title}:{' '} 
          {
            required && <span className={styles['required']}>*</span>
          }
        </label>
        <input            
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

