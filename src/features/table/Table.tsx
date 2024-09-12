import React from "react";
import style from "./Table.module.css";

const Table: React.FC = () => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>All Geos Data</th>
          <th>Yesterday's NB</th>
          <th>MTD (Up to Yesterday)</th>
          <th>MTD 2023</th>
          <th>Difference (MTD) #</th>
          <th>Difference (MTD) %</th>
          <th>Aug 2023 Total</th>
          <th>MTD Target</th>
          <th>Target Difference (Target x MTD)</th>
          <th>Target Delta (MTD) %</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Contact Centre</td>
          <td>28</td>
          <td>223</td>
          <td>203</td>
          <td>
            20 <span className={style.upArrow}></span>
          </td>
          <td>9.9%</td>
          <td>0</td>
          <td>234</td>
          <td>11</td>
          <td>
            <span className={style.downArrow}></span> -4.7%
          </td>
        </tr>
        <tr>
          <td>Web</td>
          <td>30</td>
          <td>307</td>
          <td>304</td>
          <td>
            3 <span className={style.upArrow}></span>
          </td>
          <td>1.0%</td>
          <td>0</td>
          <td>349</td>
          <td>42</td>
          <td>
            <span className={style.downArrow}></span> -12.0%
          </td>
        </tr>
        <tr>
          <td>Total</td>
          <td>58</td>
          <td>530</td>
          <td>507</td>
          <td>
            23 <span className={style.upArrow}></span>
          </td>
          <td>4.5%</td>
          <td>0</td>
          <td>583</td>
          <td>53</td>
          <td>
            <span className={style.downArrow}></span> -9.1%
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
