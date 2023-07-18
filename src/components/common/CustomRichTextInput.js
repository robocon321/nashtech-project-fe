import styles from "./Input.module.css";
import CustomEditor from "./CustomEditor";

const defaultFunc = () => {};

const Input = ({
  value = "",
  title = "",
  required = true,
  placeholder = "",
  style = {},
  name = "",
  onChange = defaultFunc,
  props = {},
  id = "",
}) => {
      return (
        <div className={styles["field"]}>
          {title && (
            <label className={styles["label"]} htmlFor={id}>
              {title}:{" "}
              {required && <span className={styles["required"]}>*</span>}
            </label>
          )}  
          <div style={{...style}}>
            <CustomEditor
              id={id}
              name={name}
              placeholder={placeholder}              
              props={{...props}}
              data={value}
              onChange={onChange}
            />
          </div>            
        </div>
      );
};

export default Input;
