import { useContext } from 'react';
import { Grid, Button, Snackbar, Alert } from "@mui/material";
import Input from "../../common/Input";
import styles from "./CreateProduct.module.css";
import { NewProductAdminContext } from '../../../contexts/providers/admin/NewProductAdminProvider';
import { Helmet } from 'react-helmet';

const CreateProduct = (props) => {
  const {
    newProductAdminState,
    changeField,
    changeThumbnail,
    changeGallery,
    changeRichtext,
    changeCategory,
    resetStatus,
    submitForm
  } = useContext(NewProductAdminContext);

  return (
    <>
      <Helmet>
        <title>Create Product</title>
        <meta name="description" content="Create Product TienDa Store" />
      </Helmet>    
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
              value={newProductAdminState.product.name}
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
              value={newProductAdminState.product.description}
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
                multiple: true
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
                  value={newProductAdminState.product.realPrice}
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
                  name="sellPrice"
                  title="Sell price"
                  onChange={changeField}
                  value={newProductAdminState.product.sellPrice}
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
                  onChange={changeField}
                  value={newProductAdminState.product.width}
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
                  value={newProductAdminState.product.height}
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
                  value={newProductAdminState.product.length}
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
                  value={newProductAdminState.product.weight}
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
                title='Categories'                
                type='checkbox'
                name='categories'
                style={{
                  margin: '10px 0px'
                }}
                props={{
                  data: newProductAdminState.categories,
                  key: 'name',
                  value: 'id'
                }}
                onChange={(e) => changeCategory()}
              />
            <Input
              id="stock"
              type="number"
              name="stock"
              title="Stock"
              onChange={changeField}
              value={newProductAdminState.product.stock}
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
              required={true}
              onChange={changeField}
              value={newProductAdminState.product.slug}
              placeholder="Enter slug"
              style={{
                marginBottom: 20
              }}
            />
            <Input
              id="meta-title"
              type="text"
              name="metaTitle"
              title="Meta Title"
              placeholder="Enter meta title"
              onChange={changeField}
              value={newProductAdminState.product.metaTitle}
              required={false}
              style={{
                marginBottom: 20
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
              value={newProductAdminState.product.metaKeyword}
              style={{
                marginBottom: 20
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
              value={newProductAdminState.product.metaDescription}
              style={{
                marginBottom: 20
              }}
              props={{
                rows: 5
              }}
            />
            <Button variant="contained" onClick={submitForm}>Submit</Button>
          </div>
        </Grid>
      </Grid>
      <Snackbar open={newProductAdminState.status.message} onClose={resetStatus} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={resetStatus} severity={newProductAdminState.status.success ? "success" : "error"} sx={{ width: '100%' }}>
          {newProductAdminState.status.message}
        </Alert>
      </Snackbar>    
    </>
  );
};

export default CreateProduct;
