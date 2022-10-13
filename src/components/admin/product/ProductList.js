import { useState } from 'react';
import { Slider, Grid, Rating, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaSearch, FaRegEye, FaTrashAlt } from 'react-icons/fa'; 
import { RiAddLine } from 'react-icons/ri';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import styles from "./ProductList.module.css";
import Input from "../../common/Input";

const rows = [{
  "id": 1,
  "product": "Pants Custom Dry Clean",
  "thumbnail": "http://dummyimage.com/103x100.png/dddddd/000000",
  "stock": 32,
  "price": 64,
  "orders": 85,
  "rating": 1
}, {
  "id": 2,
  "product": "Wine - German Riesling",
  "thumbnail": "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
  "stock": 12,
  "price": 54,
  "orders": 34,
  "rating": 4
}, {
  "id": 3,
  "product": "Avocado",
  "thumbnail": "http://dummyimage.com/224x100.png/5fa2dd/ffffff",
  "stock": 4,
  "price": 59,
  "orders": 40,
  "rating": 3
}, {
  "id": 4,
  "product": "Sandwich Wrap",
  "thumbnail": "http://dummyimage.com/113x100.png/5fa2dd/ffffff",
  "stock": 100,
  "price": 14,
  "orders": 10,
  "rating": 2
}, {
  "id": 5,
  "product": "Pasta - Ravioli",
  "thumbnail": "http://dummyimage.com/110x100.png/dddddd/000000",
  "stock": 90,
  "price": 31,
  "orders": 21,
  "rating": 3
}, {
  "id": 6,
  "product": "Beer - Muskoka Cream Ale",
  "thumbnail": "http://dummyimage.com/113x100.png/cc0000/ffffff",
  "stock": 68,
  "price": 17,
  "orders": 3,
  "rating": 4
}, {
  "id": 7,
  "product": "Pears - Fiorelle",
  "thumbnail": "http://dummyimage.com/182x100.png/5fa2dd/ffffff",
  "stock": 5,
  "price": 20,
  "orders": 7,
  "rating": 5
}, {
  "id": 8,
  "product": "Flour - Bran, Red",
  "thumbnail": "http://dummyimage.com/183x100.png/cc0000/ffffff",
  "stock": 95,
  "price": 21,
  "orders": 12,
  "rating": 1
}, {
  "id": 9,
  "product": "Juice - Tomato, 48 Oz",
  "thumbnail": "http://dummyimage.com/149x100.png/5fa2dd/ffffff",
  "stock": 91,
  "price": 45,
  "orders": 67,
  "rating": 3
}, {
  "id": 10,
  "product": "Cocoa Feuilletine",
  "thumbnail": "http://dummyimage.com/190x100.png/dddddd/000000",
  "stock": 48,
  "price": 80,
  "orders": 46,
  "rating": 5
}, {
  "id": 11,
  "product": "Beer - Moosehead",
  "thumbnail": "http://dummyimage.com/239x100.png/dddddd/000000",
  "stock": 7,
  "price": 19,
  "orders": 45,
  "rating": 2
}, {
  "id": 12,
  "product": "Mcgillicuddy Vanilla Schnap",
  "thumbnail": "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
  "stock": 46,
  "price": 4,
  "orders": 97,
  "rating": 4
}, {
  "id": 13,
  "product": "Tarragon - Primerba, Paste",
  "thumbnail": "http://dummyimage.com/155x100.png/cc0000/ffffff",
  "stock": 38,
  "price": 8,
  "orders": 8,
  "rating": 3
}, {
  "id": 14,
  "product": "Apron",
  "thumbnail": "http://dummyimage.com/238x100.png/ff4444/ffffff",
  "stock": 59,
  "price": 35,
  "orders": 59,
  "rating": 5
}, {
  "id": 15,
  "product": "Lemons",
  "thumbnail": "http://dummyimage.com/107x100.png/dddddd/000000",
  "stock": 7,
  "price": 60,
  "orders": 84,
  "rating": 1
}]

const columns = [
  {
    field: 'product',
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
    field: 'price',
    headerName: 'Price',
    minWidth: 100,
    flex: 1
  },
  {
    field: 'orders',
    headerName: 'Orders',
    minWidth: 50,
    flex: 0.5
  },
  {
    field: 'rating',
    headerName: 'Rating',
    minWidth: 50,
    flex: 0.5
  },
  {
    headerName: 'Action',
    minWidth: 100,
    flex: 1,
    renderCell: (params) => {
      return (
        <div className={styles['btn-row-table']}>
          <Button variant="contained" color="success"><FaRegEye /></Button>
          <Button variant="contained" color="error"><FaTrashAlt /></Button>
        </div>
      )
    }
  }
];

function valuetext(value) {
  return `$${value}`;
}

const minDistance = 10;

const ProductList = (props) => {
  const [rangePrice, setRangePrice] = useState([20, 37]);

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
                  name='category'
                  style={{
                    margin: '10px 0px'
                  }}
                  props={{
                    data: [
                      {
                        title: 'Grocery',
                        value: 'grocery'
                      },
                      {
                        title: 'Fashion',
                        value: 'fashion'
                      },
                      {
                        title: 'Watches',
                        value: 'watches'
                      }
                    ],
                    key: 'title',
                    value: 'value'
                  }}
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
                  value={rangePrice}
                  onChange={onRangePriceChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                />
                <div className={styles['range-price']}><span>${rangePrice[0]}</span><span>${rangePrice[1]}</span></div>
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
                  <div className={styles['rating-row']}>
                    <Rating name="read-only" value={5} readOnly />
                    <span className={styles['value-rating']}>5 stars</span>
                  </div>
                  <div className={styles['rating-row']}>
                    <Rating name="read-only" value={4} readOnly />
                    <span className={styles['value-rating']}>4 stars</span>
                  </div>
                  <div className={styles['rating-row']}>
                    <Rating name="read-only" value={3} readOnly />
                    <span className={styles['value-rating']}>3 stars</span>
                  </div>
                  <div className={styles['rating-row']}>
                    <Rating name="read-only" value={2} readOnly />
                    <span className={styles['value-rating']}>2 stars</span>
                  </div>
                  <div className={styles['rating-row']}>
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
                <input className={styles["input-search-box"]} type="text" placeholder="Search products..." />
              </div>
            </div>
            <div className={styles['row-actions']}>
              <span></span>
              <span className={styles['select-item']}>
                <b>Select 1 items <span className={styles['action-remove']}>Remove</span></b>
              </span>
            </div>
            <div style={{ width: '100%' }}>
              <DataGrid
                columns={columns}
                rows={rows}
                autoHeight 
                pageSize={7}
                checkboxSelection
                disableSelectionOnClick 
                components={{ Toolbar: GridToolbar }}
                getRowHeight={() => 'auto'}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductList;
