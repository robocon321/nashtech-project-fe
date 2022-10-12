import { Grid, Button } from "@mui/material";
import Input from "../../common/Input";
import styles from "./CreateProduct.module.css";

const CreateProduct = (props) => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <div className={styles["col-create-product"]}>
            <Input
              id="name"
              type="text"
              name="name"
              title="Product title"
              placeholder="Enter product title"
              style={{
                marginBottom: 20,
              }}
            />
            <Input
              id="short-description"
              type="textarea"
              name="short-description"
              title="Short description"
              placeholder="Enter your short description"
              props={{
                row: 20,
              }}
              style={{
                marginBottom: 20,
              }}
            />
            <Input
              id="detail-description"
              type="rich"
              name="detail-description"
              title="Detail description"
              style={{
                marginBottom: 20,
              }}
            />
            <Input
              id="thumbnail"
              type="file"
              name="thumbnail"
              title="Thumbnail"
              props={{
                accept: "image/png, image/jpeg, image/jpg",
              }}
              style={{
                marginBottom: 20,
              }}
            />
            <Input
              id="gallery"
              type="file"
              name="gallery"
              title="Gallery Image"
              props={{
                accept: "image/png, image/jpeg, image/jpg",
              }}
              style={{
                marginBottom: 20,
              }}
            />
            <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Input
                  id="real-price"
                  type="number"
                  name="real_price"
                  title="Real price"
                  style={{
                    marginBottom: 20
                  }}
                  props={{
                    min: 1,
                  }}
                  placeholder="$80"
                />
              </Grid>
              <Grid item xs={12} md={6}>
              <Input
                  id="sell-price"
                  type="number"
                  name="sell_price"
                  title="Sell price"
                  style={{
                    marginBottom: 20
                  }}
                  props={{
                    min: 1,
                  }}
                  placeholder="$80"
                />
              </Grid>

            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6} lg={3}>
                <Input
                  id="width"
                  type="number"
                  name="width"
                  title="Width(cm)"
                  props={{
                    min: 1,
                  }}
                  placeholder="80 cm"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Input
                  id="height"
                  type="number"
                  name="height"
                  title="Height(cm)"
                  props={{
                    min: 1,
                  }}
                  placeholder="80 cm"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Input
                  id="length"
                  type="number"
                  name="length"
                  title="Length(cm)"
                  props={{
                    min: 1,
                  }}
                  placeholder="80 cm"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Input
                  id="Weight"
                  type="number"
                  name="weight"
                  title="Weight(gram)"
                  props={{
                    min: 1,
                  }}
                  placeholder="80 cm"
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className={styles["col-create-product"]}>
            <Input
              type="checkbox"
              title="Categories"
              name="category"
              style={{
                margin: "10px 0px",
              }}
              props={{
                data: [
                  {
                    title: "Grocery",
                    value: "grocery",
                  },
                  {
                    title: "Fashion",
                    value: "fashion",
                  },
                  {
                    title: "Watches",
                    value: "watches",
                  },
                ],
                key: "title",
                value: "value",
              }}
              style={{
                marginBottom: 20
              }}  
            />
            <Input
              id="stock"
              type="text"
              name="stock"
              title="Stock"
              placeholder="Enter Stock"
              style={{
                marginBottom: 20
              }}
            />

            <Input
              id="slug"
              type="text"
              name="slug"
              title="Slug"
              required={false}
              placeholder="Enter slug"
              style={{
                marginBottom: 20
              }}
            />
            <Input
              id="meta-title"
              type="text"
              name="meta_title"
              title="Meta Title"
              placeholder="Enter meta title"
              required={false}
              style={{
                marginBottom: 20
              }}
            />
            <Input
              id="meta-keyword"
              type="text"
              name="meta-keyword"
              title="Meta Keyword"
              placeholder="Enter meta keyword"
              required={false}
              style={{
                marginBottom: 20
              }}
            />
            <Input
              id="meta-description"
              type="textarea"
              name="meta-description"
              title="Meta description"
              placeholder="Enter meta description"
              required={false}
              style={{
                marginBottom: 20
              }}
              props={{
                rows: 5
              }}
            />
            <Button variant="contained">Submit</Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateProduct;
