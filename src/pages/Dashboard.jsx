import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const mockdataResult = mockData.results;

  //Funtcion to set selected order details

  const details = (value) => {
    setSelectedOrderDetails(value);
  };

  //Function to set selected order of timestamps

  const tempOrder = (value) =>{
    setSelectedOrderTimeStamps(value);
  };

  //Filtering rows acording to seacrh text by search bar

  const filteredRows = mockdataResult.filter((rows) =>
    rows['&id'].toString().includes(searchText)
  );

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>

        
        <List rows={filteredRows} timeStamp={timestamps.results} currency={currency} order ={details} tempValue ={tempOrder}/>
      </div>
    </div>
  );
};

export default Dashboard;
