import React from "react";
import DailySalesTrend from "../graph/DailySalesTrend";
import { useAUGraphData } from "./useAU";
import dayjs from "dayjs";

const AUAllProductsGraph: React.FC = () => {
  const { data, isLoading, error } = useAUGraphData();
  // console.log(data);
  const current_year = dayjs().year();
  const previous_year = current_year - 1;

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
          curr_year_label={current_year.toString()}
          curr_year={data[current_year]}
          prev_year={data[previous_year]}
          prev_year_label={previous_year.toString()}
        />
      )}
    </>
  );
};

export default AUAllProductsGraph;
