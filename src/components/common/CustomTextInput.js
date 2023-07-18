import styles from "./Input.module.css";

const defaultFunc = () => {};

const CustomTextInput = ({
    value = "",
    title = "",
    required = true,
    placeholder = "",
    style = {},
    name = "",
    onChange = defaultFunc,
    onClick = defaultFunc,
    props = {},
    id = ""
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
            <input
                className={styles["input"]}
                type="text"
                placeholder={placeholder}
                required={required}
                id={id}
                style={{
                    ...style
                }}
                onChange={onChange}
                onClick={onClick}
                name={name}
                defaultValue={value}
                {...props}/>
        </div>
    );
}

export default CustomTextInput;