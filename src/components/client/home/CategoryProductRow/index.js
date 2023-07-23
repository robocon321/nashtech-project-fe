import styles from "@components/client/home/Home.module.css";
import {Container, Grid} from '@mui/material';
import CategoryProductColumn from "@components/client/home/CategoryProductRow/CategoryProductColumn/index";

const Index = props => {
    return (
        <div className={styles["module-category"]}>
        <Container>
            <Grid container spacing={5}>
                {
                    props.categoryColumns.map((item, index) =>
                        <CategoryProductColumn item={item} key={index} />
                    )
                }
            </Grid>
        </Container>
      </div>
    )
}

export default Index;