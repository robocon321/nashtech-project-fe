import { Container, Grid } from "@mui/material";
import styles from "./Feedback.module.css";
import Input from "../../common/Input";

const Feedback = (props) => {
  return (
    <>
      <Container>
        <div className={styles["form"]}>
          <h2>Give us some feedback</h2>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Input
                id="first_name"
                title="First name"
                required={true}
                placeholder="Enter your first name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                id="last_name"
                title="Last name"
                required={true}
                placeholder="Enter your last name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                id="phone"
                title="Phone"
                required={true}
                placeholder="Enter your phone"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                id="email"
                title="Email"
                required={true}
                placeholder="Enter your email"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="content"
                type="textarea"
                title="Content"
                required={true}
                placeholder="Enter your content"
                props={{
                  rows: 10,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <button>Submit</button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Feedback;
