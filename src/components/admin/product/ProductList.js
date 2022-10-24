import { useState, useContext, useEffect } from 'react';
import { Slider, Grid, Rating, Button, Snackbar, Alert } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaSearch, FaRegEye, FaTrashAlt } from 'react-icons/fa'; 
import { RiAddLine } from 'react-icons/ri';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import styles from "./ProductList.module.css";
import Input from "../../common/Input";
import { ProductAdminContext } from "../../../contexts/providers/admin/ProductAdminProvider";

function valuetext(value) {
  return `$${value}`;
}

const minDistance = 10;

const ProductList = (props) => {
  const { 
    productAdminState,    
    setPage,
    setSort,
    setSelected,
    setSearch,
    deleteProduct,
    resetStatus,
    setRating,
    setPrice,
    changeCategory
  } = useContext(ProductAdminContext);

  const [rangePrice, setRangePrice] = useState([10000, 10000000]);

  useEffect(() => {
    setPrice(`${rangePrice[0]},${rangePrice[1]}`);
  }, [rangePrice]);
  
  const columns = [
    {
      field: 'name',
      headerName: 'Product',
      minWidth: 150,
      flex: 1.5
    },
    { 
      field: 'thumbnail', 
      headerName: 'Thumbnail',
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className={styles['image-row-table']}>
            <img src={params.value} alt="Not found" />
          </div>
        )
      }
    },
    {
      field: 'stock',
      headerName: 'Stock',
      minWidth: 50,
      flex: 0.5
    },
    {
      field: 'realPrice',
      headerName: 'Real price',
      minWidth: 100,
      flex: 1
    },
    {
      field: 'sellPrice',
      headerName: 'Sell price',
      minWidth: 100,
      flex: 1
    },
    {
      field: 'rating',
      headerName: 'Rating',
      minWidth: 50,
      flex: 0.5,
      renderCell: (params) => Math.round(params.row.rating * 10) / 10
    },
    {
      field: "visibleType",
      headerName: "Visible",
      minWidth: 150,
      flex: 1.5,
      renderCell: (params) => {
        return <div className={params.row.visibleType === 'VISIBLE' ? 'visible' : 'invisible'}>{params.row.visibleType}</div>;
      },
    },    
    {
      headerName: 'Action',
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className={styles['btn-row-table']}>
              <Button variant="contained" color="success" onClick={() => {}}>
                <FaRegEye />
              </Button>
              <span> </span>
              <Button variant="contained" color="error" onClick={() => deleteProduct([params.row.id])}>
                <FaTrashAlt />
              </Button>
          </div>
        )
      }
    }
  ];

  const onRangePriceChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRangePrice([Math.min(newValue[0], rangePrice[1] - minDistance), rangePrice[1]]);
    } else {
      setRangePrice([rangePrice[0], Math.max(newValue[1], rangePrice[0] + minDistance)]);
    }
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <div className={styles["filter"]}>
            <Accordion>
              <AccordionSummary
                className={styles['title-filter']}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <b>Category</b>
              </AccordionSummary>
              <AccordionDetails>
                <Input 
                  type='checkbox'
                  name='product'
                  style={{
                    margin: '10px 0px'
                  }}
                  props={{
                    data: productAdminState.categories,
                    key: 'name',
                    value: 'id'
                  }}
                  onChange={(e) => changeCategory()}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className={styles['title-filter']}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <b>Price</b>
              </AccordionSummary>
              <AccordionDetails>
              <Slider
                  getAriaLabel={() => 'Minimum distance'}
                  defaultValue={[10000, 10000000]}
                  value={rangePrice}
                  onChange={onRangePriceChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                  max={10000000}
                  min={10000}
                />
                <div className={styles['range-price']}><span>{rangePrice[0]} VNĐ</span><span>{rangePrice[1]} VNĐ</span></div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className={styles['title-filter']}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <b>Rating</b>
              </AccordionSummary>
              <AccordionDetails>
              <AccordionDetails>
                <div className={styles['rating-filter']}>
                  <div className={styles['rating-row']} onClick={() => setRating('4,5')}>
                    <Rating name="read-only" value={5} readOnly />
                    <span className={styles['value-rating']}>5 stars</span>
                  </div>
                  <div className={styles['rating-row']} onClick={() => setRating('3,4')}>
                    <Rating name="read-only" value={4} readOnly />
                    <span className={styles['value-rating']}>4 stars</span>
                  </div>
                  <div className={styles['rating-row']} onClick={() => setRating('2,3')}>
                    <Rating name="read-only" value={3} readOnly />
                    <span className={styles['value-rating']}>3 stars</span>
                  </div>
                  <div className={styles['rating-row']} onClick={() => setRating('1,2')}>
                    <Rating name="read-only" value={2} readOnly />
                    <span className={styles['value-rating']}>2 stars</span>
                  </div>
                  <div className={styles['rating-row']} onClick={() => setRating('0,1')}>
                    <Rating name="read-only" value={1} readOnly />
                    <span className={styles['value-rating']}>1 star</span>
                  </div>
                </div>
              </AccordionDetails>

              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <div className={styles["table"]}>
            <div className={styles["row-actions"]}>
              <Button variant="contained" className={styles['btn-add']}><RiAddLine /> NEW PRODUCT</Button>
              <div className={styles["search-box"]}>
                <span className={styles["icon-search-box"]}><FaSearch /></span>
                <input className={styles["input-search-box"]} 
                  type="text" placeholder="Search products..." 
                  value={productAdminState.conditions.LIKE_name}
                  onChange={setSearch}
                  name="LIKE_name"
                  />
              </div>
            </div>
            <div className={styles['row-actions']}>
              <span></span>
              <span className={styles["select-item"]}>
                <b>
                  Select {productAdminState.selected.length} items
                  {productAdminState.selected.length ? (
                    <span className={styles["action-remove"]} onClick={() => deleteProduct(productAdminState.selected)}>Remove</span>
                  ) : (
                    <span></span>
                  )}
                </b>
              </span>            </div>
            <div style={{ width: '100%' }}>
              {productAdminState.products && <DataGrid
                  rows={productAdminState.products.content}
                  columns={columns}
                  rowCount={productAdminState.products.totalElements}
                  pageSize={productAdminState.conditions.size}
                  page={productAdminState.products.number}
                  onPageChange={setPage}
                  paginationMode="server"
                  sortingMode="server"
                  onSortModelChange={setSort}
                  onSelectionModelChange={setSelected}
                  selectionModel={productAdminState.selected}
                  autoHeight
                  checkboxSelection
                  disableSelectionOnClick
                  components={{ Toolbar: GridToolbar }}
                  getRowHeight={() => "auto"}
              />
              }
            </div>
          </div>
        </Grid>
      </Grid>
      <Snackbar open={productAdminState.status.message} onClose={resetStatus} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={resetStatus} severity={productAdminState.status.success ? "success" : "error"} sx={{ width: '100%' }}>
          {productAdminState.status.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductList;
