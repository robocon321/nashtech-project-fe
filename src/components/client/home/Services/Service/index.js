import styles from "@components/client/home/Home.module.css";

const Index = props => {
    return (
        <div className={styles["service"]}>
        <div className={"flex-center " + styles["icon-service"]}>{props.loadIcon()}</div>
        <div className={styles["info-service"]}>
          <div className={styles["title-service"]}>{props.title}</div>
          <div className={styles["detail-service"]}>{props.detail}</div>
        </div>
      </div>

    )
}

export default Index;