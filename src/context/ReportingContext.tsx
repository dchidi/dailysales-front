import dayjs, { Dayjs } from "dayjs";
import React, { createContext, useContext, useState, useCallback } from "react";

interface IReportingProvider {
  children: React.ReactNode;
}

type ReportingContextType = {
  reportingDate: { from: string; to: string };
  updateReportingDate: (selected_date: Dayjs) => void;
};

const ReportingContext = createContext<ReportingContextType | undefined>(
  undefined
);

export const ReportingProvider: React.FC<IReportingProvider> = ({
  children,
}) => {
  const initFrom = dayjs().startOf("month").format("YYYY-MM-DD");
  const initTo = dayjs().format("YYYY-MM-DD");
  const [reportingDate, setReportingDate] = useState({
    from: initFrom,
    to: initTo,
  });

  // Caching the dayjs object
  const updateReportingDate = useCallback((selected_date: Dayjs) => {
    const selectedDateInstance = dayjs(selected_date); // Create dayjs instance once
    const from = selectedDateInstance.startOf("month").format("YYYY-MM-DD");
    const to = selectedDateInstance.format("YYYY-MM-DD");
    setReportingDate({ from, to });
  }, []);

  return (
    <ReportingContext.Provider
      value={{
        reportingDate,
        updateReportingDate,
      }}
    >
      {children}
    </ReportingContext.Provider>
  );
};

export const useReportingCtx = (): ReportingContextType => {
  const context = useContext(ReportingContext);
  if (!context) {
    throw new Error("useReporting must be used within an ReportingProvider");
  }
  return context;
};
