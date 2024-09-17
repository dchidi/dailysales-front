export const base_url = "http://127.0.0.1:8000/api/v1";

export const api_au_graph_data = (
  start_date: string,
  end_date: string
): string =>
  `${base_url}/report_sales/report_sales?start_date=${start_date}&end_date=${end_date}`;

export const api_au_table_data = (
  start_date: string,
  end_date: string
): string =>
  `${base_url}/report_sales/report_sales_table_data?start_date=${start_date}&end_date=${end_date}`;
