import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import styles from "./Input.module.css";

const defaultFunc = () => {};

const Input = ({
  value = "",
  title = "",
  required = true,
  name = "",
  onChange = defaultFunc,
  options = {},
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

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={value}
            onChange={onChange}
            name={name}
            row={props.row}
          >
            {options.data.map((item, index) => {
              return (
                <FormControlLabel
                  value={item[options.value]}
                  control={<Radio />}
                  label={item[options.key]}
                  key={index}
                />
              );
            })}
          </RadioGroup>
        </div>
      );
};

export default Input;
