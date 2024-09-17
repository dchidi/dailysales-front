import React from "react";
import style from "./Sales.module.css";
import Table from "../../features/table/Table";
import AUAllProductsGraph from "../../features/au/AllProductsGraph";
import { useAUTableData } from "../../features/au/useAU";

const Sales: React.FC = () => {
  const { data, isLoading, error } = useAUTableData();

  if (error) {
    console.log(error);
    return <div>Unable to load graph. Try again later.</div>;
  }
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={style.graph}>
            <h4>All Products</h4>
            <div>
              <AUAllProductsGraph />
            </div>
          </div>
          <div className={style.table}>
            <Table
              headers={data?.headers}
              phone_sales={data?.phone}
              total_sales={data?.total}
              web_sales={data?.web}
            />
          </div>
          {/* <div className={style.graph}>
            <h4>All Products excluding PetID</h4>
          </div>
          <div className={style.table}></div> */}
        </>
      )}
    </>
  );
};

export default Sales;
