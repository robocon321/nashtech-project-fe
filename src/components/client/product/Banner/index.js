import styles from "@components/client/product/Product.module.css";

const Index = props => {
    return (
        <div className={styles["banner"]}>
            <img src={props.image} alt="Not found" />
        </div>
    )
}

export default Index;