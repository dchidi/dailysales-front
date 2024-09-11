import React from "react";
import DailySalesTrend from "../../features/graph/DailySalesTrend";
import style from "./Sales.module.css";
import Table from "../../features/table/Table";

const Sales: React.FC = () => {
  return (
    <>
      <div className={style.graph}>
        <h4>All Products</h4>
        <div>
          <DailySalesTrend />
        </div>
      </div>
      <div className={style.table}>
        <Table />
      </div>
      <div className={style.graph}>
        <h4>All Products excluding PetID</h4>
        <div>
          <DailySalesTrend />
        </div>
      </div>
      <div className={style.table}></div>
    </>
  );
};

export default Sales;
