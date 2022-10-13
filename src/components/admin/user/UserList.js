import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { FaSearch, FaRegEye, FaTrashAlt } from "react-icons/fa";
import { RiAddLine } from "react-icons/ri";

import styles from "./UserList.module.css";

const rows = [
  {
    id: 1,
    username: "bguy0",
    fullname: "Burlie Guy",
    phone: "1246265832",
    email: "bguy0@twitter.com",
    avatar:
      "https://robohash.org/doloribuspossimusab.png?size=100x100&set=set1",
    birthday: "1994-07-20",
    sex: 0,
    status: 0,
    create_time: "12/8/2021",
  },
  {
    id: 2,
    username: "dgerish1",
    fullname: "Demeter Gerish",
    phone: "4559065151",
    email: "dgerish1@squidoo.com",
    avatar: "https://robohash.org/ametquinisi.png?size=100x100&set=set1",
    birthday: "1995-12-14",
    sex: 0,
    status: 1,
    create_time: "11/29/2021",
  },
  {
    id: 3,
    username: "bcoltart2",
    fullname: "Bili Coltart",
    phone: "4672530341",
    email: "bcoltart2@tmall.com",
    avatar: "https://robohash.org/cumquisquamnihil.png?size=100x100&set=set1",
    birthday: "2000-06-08",
    sex: 0,
    status: 1,
    create_time: "9/26/2022",
  },
  {
    id: 4,
    username: "twashbrook3",
    fullname: "Tommy Washbrook",
    phone: "6138102540",
    email: "twashbrook3@desdev.cn",
    avatar:
      "https://robohash.org/molestiaeplaceatipsam.png?size=100x100&set=set1",
    birthday: "1992-06-14",
    sex: 1,
    status: 1,
    create_time: "3/5/2022",
  },
  {
    id: 5,
    username: "imilvarnie4",
    fullname: "Inglebert Milvarnie",
    phone: "9744778172",
    email: "imilvarnie4@msn.com",
    avatar: "https://robohash.org/quiaearumfugiat.png?size=100x100&set=set1",
    birthday: "1990-05-25",
    sex: 0,
    status: 1,
    create_time: "2/4/2022",
  },
  {
    id: 6,
    username: "sferriby5",
    fullname: "Shoshanna Ferriby",
    phone: "4578801590",
    email: "sferriby5@nydailynews.com",
    avatar:
      "https://robohash.org/nihilarchitectominus.png?size=100x100&set=set1",
    birthday: "1999-10-08",
    sex: 0,
    status: 0,
    create_time: "4/25/2022",
  },
  {
    id: 7,
    username: "cvalero6",
    fullname: "Cyndy Valero",
    phone: "9264045816",
    email: "cvalero6@infoseek.co.jp",
    avatar: "https://robohash.org/idvitaeaut.png?size=100x100&set=set1",
    birthday: "1989-02-26",
    sex: 1,
    status: 0,
    create_time: "5/12/2022",
  },
  {
    id: 8,
    username: "esayle7",
    fullname: "Edgar Sayle",
    phone: "5739534613",
    email: "esayle7@last.fm",
    avatar:
      "https://robohash.org/ipsumbeataemolestiae.png?size=100x100&set=set1",
    birthday: "1995-05-02",
    sex: 0,
    status: 0,
    create_time: "2/7/2022",
  },
  {
    id: 9,
    username: "rnaismith8",
    fullname: "Ronnie Naismith",
    phone: "4497413699",
    email: "rnaismith8@ebay.com",
    avatar: "https://robohash.org/etnostrumquos.png?size=100x100&set=set1",
    birthday: "1989-04-15",
    sex: 1,
    status: 0,
    create_time: "6/4/2022",
  },
  {
    id: 10,
    username: "krofe9",
    fullname: "Keen Rofe",
    phone: "7776623337",
    email: "krofe9@usa.gov",
    avatar: "https://robohash.org/cumquequaeratnon.png?size=100x100&set=set1",
    birthday: "2000-07-25",
    sex: 0,
    status: 1,
    create_time: "6/7/2022",
  },
];

const columns = [
  {
    field: "username",
    headerName: "Username",
    minWidth: 100,
    flex: 2,
  },
  {
    field: "fullname",
    headerName: "Full name",
    minWidth: 150,
    flex: 1.5,
  },
  { 
    field: 'avatar', 
    headerName: 'Avatar',
    minWidth: 150,
    flex: 1.5,
    renderCell: (params) => {
      return (
        <div className={styles['image-row-table']}>
          <img src={params.value} alt="Not found" />
        </div>
      )
    }
  },

  {
    field: "phone",
    headerName: "Phone",
    minWidth: 150,
    flex: 1.5,
  },
  {
    headerName: "Action",
    minWidth: 200,
    flex: 2,
    renderCell: (params) => {
      return (
        <div className={styles["btn-row-table"]}>
          <Button variant="contained" color="success">
            <FaRegEye />
          </Button>
          <span> </span>
          <Button variant="contained" color="error">
            <FaTrashAlt />
          </Button>
        </div>
      );
    },
  },
];

const UserList = (props) => {
  return (
    <>
      <div className={styles["row-actions"]}>
        <Button variant="contained" className={styles["btn-add"]}>
          <RiAddLine /> NEW USER
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
    </>
  );
};

export default UserList;
