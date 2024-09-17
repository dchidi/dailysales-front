import React from "react";
import style from "./Table.module.css";

interface ITableProps {
  headers: { label: string; value: string }[];
  phone_sales: any;
  web_sales: any;
  total_sales: any;
}

const Table: React.FC<ITableProps> = ({
  headers,
  phone_sales,
  web_sales,
  total_sales,
}) => {
  return (
    <>
      {headers.length > 0 && (
        <table className={style.table}>
          <thead>
            <tr>
              {headers.map((item, index) => (
                <th key={index}>{item["value"]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {headers.map((item, index) => {
                const [_, value] = Object.entries(item)[0]; // Extract key and value
                return <td key={index}>{phone_sales[value]}</td>;
              })}
            </tr>
            <tr>
              {headers.map((item, index) => {
                const [_, value] = Object.entries(item)[0]; // Extract key and value
                return <td key={index}>{web_sales[value]}</td>;
              })}
            </tr>
            <tr>
              {headers.map((item, index) => {
                const [_, value] = Object.entries(item)[0]; // Extract key and value
                return <td key={index}>{total_sales[value]}</td>;
              })}
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
