import { Button, Grid, Switch } from "@mui/material";
import { useContext } from "react";

import Input from "@components/common/Input";
import { CategoryAdminContext } from "@providers/admin/CategoryAdminProvider";
import styles from "@components/admin/category/ManageCategoryList.module.css";

const Index = props => {
    const {
        categoryAdminState,
        changeField,
        resetCategory,
        submitForm,
        switchVisible,
      } = useContext(CategoryAdminContext);
    
    return (
        <Grid item xs={12} lg={4}>
          
          <div className={styles["col-category"]}>
            <Input
              id="name"
              type="text"
              name="name"
              title="Category name"
              onChange={changeField}
              value={categoryAdminState.category.name}
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="description"
              type="textarea"
              name="description"
              title="Category description"
              onChange={changeField}
              value={categoryAdminState.category.description}
              props={{
                rows: 5,
              }}
              style={{
                marginBottom: 10,
              }}
              required={false}
            />
            <Input
              id="slug"
              type="text"
              name="slug"
              title="Category slug"
              onChange={changeField}
              value={categoryAdminState.category.slug}
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="meta-title"
              type="text"
              name="metaTitle"
              title="Meta title"
              onChange={changeField}
              value={categoryAdminState.category.metaTitle}
              required={false}
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="meta-keyword"
              type="text"
              name="metaKeyword"
              title="Meta keyword"
              onChange={changeField}
              value={categoryAdminState.category.metaKeyword}
              required={false}
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="meta-description"
              type="textarea"
              name="metaDescription"
              title="Meta description"
              onChange={changeField}
              value={categoryAdminState.category.metaDescription}
              required={false}
              style={{
                marginBottom: 10,
              }}
            />
            <label>Visible</label>
            <Switch
              checked={categoryAdminState.category.status == 1}
              onChange={() => switchVisible(1 - categoryAdminState.category.status)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <br />
            <Button 
              variant="contained" 
              onClick={() => submitForm()}>SUBMIT</Button>
            <span> </span>
            <Button
              variant="contained"
              color="warning"
              onClick={() => resetCategory()}
            >
              CLEAR
            </Button>
          </div>
        </Grid>
    )
}

export default Index;