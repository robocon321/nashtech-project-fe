import { useContext } from "react";
import { Grid, Button, Snackbar, Alert, Switch } from "@mui/material";
import Input from "../../common/Input";
import styles from "./UpdateProduct.module.css";
import { UpdateProductAdminContext } from "../../../contexts/providers/admin/UpdateProductAdminProvider";

const UpdateProduct = (props) => {
  const {
    updateProductAdminState,
    changeField,
    changeThumbnail,
    changeGallery,
    changeRichtext,
    changeCategory,
    resetStatus,
    submitForm,
    switchVisible
  } = useContext(UpdateProductAdminContext);

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
              onChange={changeField}
              value={updateProductAdminState.product.name}
              style={{
                marginBottom: 20,
              }}
            />
            <Input
              id="short-description"
              type="textarea"
              name="description"
              title="Short description"
              placeholder="Enter your short description"
              onChange={changeField}
              value={updateProductAdminState.product.description}
              props={{
                row: 20,
              }}
              style={{
                marginBottom: 20,
              }}
            />
            <Input
              id="full-description"
              type="rich"
              name="fullDescription"
              title="Full description"
              onChange={changeRichtext}
              value={updateProductAdminState.product.fullDescription}
              style={{
                marginBottom: 20,
              }}
            />
            <Input
              id="thumbnail"
              type="file"
              name="thumbnail"
              title="Thumbnail"
              onChange={changeThumbnail}
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
              onChange={changeGallery}
              required={false}
              props={{
                accept: "image/png, image/jpeg, image/jpg",
                multiple: true,
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
                  name="realPrice"
                  title="Real price"
                  onChange={changeField}
                  value={updateProductAdminState.product.realPrice}
                  style={{
                    marginBottom: 20,
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
                  name="sellPrice"
                  title="Sell price"
                  onChange={changeField}
                  value={updateProductAdminState.product.sellPrice}
                  style={{
                    marginBottom: 20,
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
                  onChange={changeField}
                  value={updateProductAdminState.product.width}
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
                  onChange={changeField}
                  value={updateProductAdminState.product.height}
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
                  onChange={changeField}
                  value={updateProductAdminState.product.length}
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
                  onChange={changeField}
                  value={updateProductAdminState.product.weight}
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
              title="Categories"
              type="checkbox"
              name="categories"
              style={{
                margin: "10px 0px",
              }}
              props={{
                data: updateProductAdminState.categories,
                key: "name",
                value: "id",
              }}
              onChange={(e) => changeCategory()}
            />
            <Input
              id="stock"
              type="number"
              name="stock"
              title="Stock"
              onChange={changeField}
              value={updateProductAdminState.product.stock}
              placeholder="Enter Stock"
              style={{
                marginBottom: 20,
              }}
            />

            <Input
              id="slug"
              type="text"
              name="slug"
              title="Slug"
              required={true}
              onChange={changeField}
              value={updateProductAdminState.product.slug}
              placeholder="Enter slug"
              style={{
                marginBottom: 20,
              }}
            />
            <Input
              id="meta-title"
              type="text"
              name="metaTitle"
              title="Meta Title"
              placeholder="Enter meta title"
              onChange={changeField}
              value={updateProductAdminState.product.metaTitle}
              required={false}
              style={{
                marginBottom: 20,
              }}
            />
            <Input
              id="meta-keyword"
              type="text"
              name="metaKeyword"
              title="Meta Keyword"
              placeholder="Enter meta keyword"
              required={false}
              onChange={changeField}
              value={updateProductAdminState.product.metaKeyword}
              style={{
                marginBottom: 20,
              }}
            />
            <Input
              id="meta-description"
              type="textarea"
              name="metaDescription"
              title="Meta description"
              placeholder="Enter meta description"
              required={false}
              onChange={changeField}
              value={updateProductAdminState.product.metaDescription}
              style={{
                marginBottom: 20,
              }}
              props={{
                rows: 5,
              }}
            />
            <label>Visible</label>
            <Switch
              checked={
                updateProductAdminState.product.status == 1
              }
              onChange={() =>
                switchVisible(1 - updateProductAdminState.product.status)
              }
              inputProps={{ "aria-label": "controlled" }}
            />
            <br />
            <Button variant="contained" onClick={submitForm}>
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
      <Snackbar
        open={updateProductAdminState.status.message}
        onClose={resetStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={resetStatus}
          severity={
            updateProductAdminState.status.success ? "success" : "error"
          }
          sx={{ width: "100%" }}
        >
          {updateProductAdminState.status.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default UpdateProduct;
