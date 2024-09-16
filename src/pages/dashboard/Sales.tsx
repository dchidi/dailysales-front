import React from "react";
import style from "./Sales.module.css";
import Table from "../../features/table/Table";
import AUAllProductsGraph from "../../features/au/AllProductsGraph";

const Sales: React.FC = () => {
  return (
    <>
      <div className={style.graph}>
        <h4>All Products</h4>
        <div>
          {/* <DailySalesTrend /> */}
          <AUAllProductsGraph />
        </div>
      </div>
      <div className={style.table}>
        <Table />
      </div>
      <div className={style.graph}>
        <h4>All Products excluding PetID</h4>
        <div>{/* <DailySalesTrend /> */}</div>
      </div>
      <div className={style.table}></div>
    </>
  );
};

export default Sales;
