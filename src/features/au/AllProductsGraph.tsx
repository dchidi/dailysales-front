import React from "react";
import DailySalesTrend from "../graph/DailySalesTrend";
import { useAUGraphData } from "./useAU";

const AUAllProductsGraph: React.FC = () => {
  const { data, isLoading, error } = useAUGraphData();
  // console.log(data);

  if (error) {
    console.log(error);
    return <div>Unable to load graph. Try again later.</div>;
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DailySalesTrend
          days_in_month={data.days_in_month}
          curr_year_label={data.curr_year}
          curr_year={data[data.curr_year]}
          prev_year={data[data.prev_year]}
          prev_year_label={data.prev_year}
        />
      )}
    </>
  );
};

export default AUAllProductsGraph;
