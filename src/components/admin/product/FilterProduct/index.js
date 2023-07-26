import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Rating, Slider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useContext, useState } from "react";

import Input from "@components/common/Input";
import { ProductAdminContext } from "@providers/admin/ProductAdminProvider";
import styles from "@components/admin/product/ManageProductList.module.css";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});


const Index = props => {
    const {
        productAdminState,
        setRating,
        setPrice,
        changeCategory,
      } = useContext(ProductAdminContext);
    
      const [value, setValue] = useState([10000, 10000000]);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const handleMouseUp = (e) => {
        setPrice(`${value[0]},${value[1]}`);
      };
    
    return (
        <Grid item xs={12} lg={4}>
          <div className={styles["filter"]}>
            <Accordion>
              <AccordionSummary
                className={styles["title-filter"]}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <b>Category</b>
              </AccordionSummary>
              <AccordionDetails>
                <Input
                  type="checkbox"
                  name="product"
                  style={{
                    margin: "10px 0px",
                  }}
                  props={{
                    data: productAdminState.categories,
                    key: "name",
                    value: "id",
                  }}
                  onChange={(e) => changeCategory()}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className={styles["title-filter"]}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <b>Price</b>
              </AccordionSummary>
              <AccordionDetails>
                <Slider
                  getAriaLabel={() => "Minimum distance"}
                  value={value}
                  onChange={handleChange}
                  onMouseUp={handleMouseUp}
                  valueLabelDisplay="auto"
                  disableSwap
                  max={10000000}
                  min={10000}
                />
                <div className={styles["range-price"]}>
                  <span>{formatter.format(value[0])}</span>
                  <span>{formatter.format(value[1])}</span>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className={styles["title-filter"]}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <b>Rating</b>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionDetails>
                  <div className={styles["rating-filter"]}>
                    <div
                      className={styles["rating-row"]}
                      onClick={() => setRating("4,5")}
                    >
                      <Rating name="read-only" value={5} readOnly />
                      <span className={styles["value-rating"]}>5 stars</span>
                    </div>
                    <div
                      className={styles["rating-row"]}
                      onClick={() => setRating("3,4")}
                    >
                      <Rating name="read-only" value={4} readOnly />
                      <span className={styles["value-rating"]}>4 stars</span>
                    </div>
                    <div
                      className={styles["rating-row"]}
                      onClick={() => setRating("2,3")}
                    >
                      <Rating name="read-only" value={3} readOnly />
                      <span className={styles["value-rating"]}>3 stars</span>
                    </div>
                    <div
                      className={styles["rating-row"]}
                      onClick={() => setRating("1,2")}
                    >
                      <Rating name="read-only" value={2} readOnly />
                      <span className={styles["value-rating"]}>2 stars</span>
                    </div>
                    <div
                      className={styles["rating-row"]}
                      onClick={() => setRating("0,1")}
                    >
                      <Rating name="read-only" value={1} readOnly />
                      <span className={styles["value-rating"]}>1 star</span>
                    </div>
                  </div>
                </AccordionDetails>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>

    )
}

export default Index;