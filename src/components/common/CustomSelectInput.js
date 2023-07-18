import styles from "./Input.module.css";

const defaultFunc = () => {};

const CustomSelectInput = ({
    value = "",
    title = "",
    required = true,
    placeholder = "",
    style = {},
    name = "",
    onChange = defaultFunc,
    id = "",
    options = []
}) => {
    return (
        <div className={styles["field"]}>
            {
                title && (
                    <label className={styles["label"]} htmlFor={id}>
                        {title}:{" "}
                        {required && <span className={styles["required"]}>*</span>}
                    </label>
                )
            }
            <select
                id={id}
                name={name}
                required={required}
                style={{
                    ...style
                }}
                className={styles["input"]}
                onChange={onChange}>
                <option
                    value=""
                    defaultChecked="defaultChecked"
                    disabled="disabled"
                    hidden="hidden">
                    {placeholder}
                </option>
                {
                        options.data.map((item, index) => {
                            return <option key={index} value={item[options.value]}>{item[options.key]}</option>;
                        })
                }
            </select>
        </div>
    );
};

export default CustomSelectInput;
