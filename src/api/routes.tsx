export const base_url = "http://127.0.0.1:8000/api/v1";
export const api_au_graph_data = (
  start_date: string | Date,
  end_date: string | Date
): string => {
  const start =
    typeof start_date === "string" ? start_date : start_date.toISOString();
  const end = typeof end_date === "string" ? end_date : end_date.toISOString();

  return `${base_url}/report_sales/report_sales?start_date=${start}&end_date=${end}`;
};
