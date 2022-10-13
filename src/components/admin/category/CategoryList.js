import { Grid, Button } from "@mui/material";
import { FaSearch, FaRegEye, FaTrashAlt } from 'react-icons/fa'; 
import { RiAddLine } from 'react-icons/ri';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


import Input from "../../common/Input";
import styles from "./CategoryList.module.css";


const rows = [{
  id: 0,
  name: 'Category 0',
  description: 'Nothing',
  slug: 'slug-0',
  create_time: '01/01/2020',
  mod_time: '09/10/2020'
},{
  id: 1,
  name: 'Category 1',
  description: 'Nothing',
  slug: 'slug-1',
  create_time: '01/01/2020',
  mod_time: '09/10/2020'
},{
  id: 2,
  name: 'Category 2',
  description: 'Nothing',
  slug: 'slug-2',
  create_time: '01/01/2020',
  mod_time: '09/10/2020'
},{
  id: 3,
  name: 'Category 3',
  description: 'Nothing',
  slug: 'slug-3',
  create_time: '01/01/2020',
  mod_time: '09/10/2020'
},{
  id: 4,
  name: 'Category 4',
  description: 'Nothing',
  slug: 'slug-4',
  create_time: '01/01/2020',
  mod_time: '09/10/2020'
},{
  id: 5,
  name: 'Category 5',
  description: 'Nothing',
  slug: 'slug-5',
  create_time: '01/01/2020',
  mod_time: '09/10/2020'
},{
  id: 6,
  name: 'Category 6',
  description: 'Nothing',
  slug: 'slug-6',
  create_time: '01/01/2020',
  mod_time: '09/10/2020'
},{
  id: 7,
  name: 'Category 7',
  description: 'Nothing',
  slug: 'slug-7',
  create_time: '01/01/2020',
  mod_time: '09/10/2020'
},{
  id: 8,
  name: 'Category 8',
  description: 'Nothing',
  slug: 'slug-8',
  create_time: '01/01/2020',
  mod_time: '09/10/2020'
},{
  id: 9,
  name: 'Category 9',
  description: 'Nothing',
  slug: 'slug-9',
  create_time: '01/01/2020',
  mod_time: '09/10/2020'
}]

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 100,
    flex: 1
  },
  { 
    field: 'name', 
    headerName: 'Name',
    minWidth: 100,
    flex: 2
  },
  {
    field: 'description',
    headerName: 'Description',
    minWidth: 100,
    flex: 3
  },
  {
    field: 'create_time',
    headerName: 'Create time',
    minWidth: 150,
    flex: 1.5
  },
  {
    field: 'mod_time',
    headerName: 'Modify time',
    minWidth: 150,
    flex: 1.5
  },
  {
    headerName: 'Action',
    minWidth: 200,
    flex: 2,
    renderCell: (params) => {
      return (
        <div className={styles['btn-row-table']}>
          <Button variant="contained" color="success"><FaRegEye /></Button>
          <span>{' '}</span>
          <Button variant="contained" color="error"><FaTrashAlt /></Button>
        </div>
      )
    }
  }
];


const CategoryList = (props) => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <div className={styles["col-category"]}>
            <Input
              id="name"
              type="text"
              name="name"
              title="Category name"
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="description"
              type="textarea"
              name="description"
              title="Category description"
              props={{
                rows: 5,
              }}
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="slug"
              type="text"
              name="slug"
              title="Category slug"
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="meta-title"
              type="text"
              name="meta_title"
              title="Meta title"
              required={false}
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="meta-keyword"
              type="text"
              name="meta_keyword"
              title="Meta keyword"
              required={false}
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="meta-description"
              type="textarea"
              name="meta_description"
              title="Meta description"
              required={false}
              style={{
                marginBottom: 10,
              }}
            />
            <Button variant="contained">SUBMIT</Button>
            <span> </span>
            <Button variant="contained" color="warning">
              CLEAR
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <div className={styles["col-category"]}>
            <div className={styles["row-actions"]}>
              <Button variant="contained" className={styles["btn-add"]}>
                <RiAddLine /> NEW CATEGORY
              </Button>
              <div className={styles["search-box"]}>
                <span className={styles["icon-search-box"]}>
                  <FaSearch />
                </span>
                <input
                  className={styles["input-search-box"]}
                  type="text"
                  placeholder="Search categories..."
                />
              </div>
            </div>
            <div className={styles["row-actions"]}>
              <span></span>
              <span className={styles["select-item"]}>
                <b>
                  Select 1 items{" "}
                  <span className={styles["action-remove"]}>Remove</span>
                </b>
              </span>
            </div>
            <div style={{ width: "100%" }}>
              <DataGrid
                columns={columns}
                rows={rows}
                autoHeight
                pageSize={7}
                checkboxSelection
                disableSelectionOnClick 
                components={{ Toolbar: GridToolbar }}
                getRowHeight={() => "auto"}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryList;
