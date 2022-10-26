import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import styles from "./Input.module.css";
import CustomEditor from "./CustomEditor";

const defaultFunc = () => {};

const Input = ({
  value = "",
  title = "",
  required = true,
  placeholder = "",
  type = "text",
  style = {},
  name = "",
  onChange = defaultFunc,
  onClick = defaultFunc,
  props = {},
  id = "",
}) => {
  switch (type) {
    case "rich":
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
    case "checkbox":
      return (
        <div className={styles["field"]}>
          {title && (
            <label className={styles["label"]}>
              {title}:{" "}
              {required && <span className={styles["required"]}>*</span>}
            </label>
          )}
          {props.data.map((item, index) => {
            return (
              <div key={index} style={{ ...style }}>
                <input
                  id={item[props.value]}
                  type="checkbox"
                  value={item[props.value]}
                  name="category"
                  onChange={onChange}
                />
                <label htmlFor={item[props.value]} className={styles["title"]}>
                  {item[props.key]}
                </label>
              </div>
            );
          })}
        </div>
      );
    case "select":
      return (
        <div className={styles["field"]}>
          {title && (
            <label className={styles["label"]} htmlFor={id}>
              {title}:{" "}
              {required && <span className={styles["required"]}>*</span>}
            </label>
          )}
          <select
            id={id}
            name={name}
            required={required}
            style={{ ...style }}
            className={styles["input"]}
          >
            <option value="" selected disabled hidden>
              {placeholder}
            </option>
            {props.data.map((item) => {
              return <option value={props[value]}>{item[props.key]}</option>;
            })}
          </select>
        </div>
      );
    case "radio":
      return (
        <div className={styles["field"]}>
          {title && (
            <label className={styles["label"]} htmlFor={id}>
              {title}:{" "}
              {required && <span className={styles["required"]}>*</span>}
            </label>
          )}

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={value}
            onChange={onChange}
            name={name}
            row={props.row}
          >
            {props.data.map((item, index) => {
              return (
                <FormControlLabel
                  value={item[props.value]}
                  control={<Radio />}
                  label={item[props.key]}
                  key={index}
                />
              );
            })}
          </RadioGroup>
        </div>
      );
    case "textarea":
      return (
        <div className={styles["field"]}>
          {title && (
            <label className={styles["label"]} htmlFor={id}>
              {title}:{" "}
              {required && <span className={styles["required"]}>*</span>}
            </label>
          )}

          <textarea
            className={styles["input"]}
            type={type}
            placeholder={placeholder}
            required={required}
            id={id}
            style={{ ...style }}
            onChange={onChange}
            onClick={onClick}
            name={name}
            {...props}
            defaultValue={value}
          />
        </div>
      );
    default:
      return (
        <div className={styles["field"]}>
          {title && (
            <label className={styles["label"]} htmlFor={id}>
              {title}:{" "}
              {required && <span className={styles["required"]}>*</span>}
            </label>
          )}
          {
            value === '' ? (
            <input
              className={styles["input"]}
              type={type}
              placeholder={placeholder}
              required={required}
              id={id}
              style={{ ...style }}
              onChange={onChange}
              onClick={onClick}
              name={name}
              {...props}
            />
            ) : (
            <input
              className={styles["input"]}
              type={type}
              placeholder={placeholder}
              required={required}
              id={id}
              style={{ ...style }}
              onChange={onChange}
              onClick={onClick}
              name={name}
              value={value}
              {...props}
            />
            )
          }
        </div>
      );
  }
};

export default Input;
