import React, { useState } from "react";
import dayjs from "dayjs";
import styles from "./DatePicker.module.css";

const months = Array.from({ length: 12 }, (_, i) =>
  dayjs().month(i).format("MMMM")
);
const years = Array.from({ length: 30 }, (_, i) =>
  dayjs()
    .year(dayjs().year() - 15 + i)
    .year()
);

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs().subtract(1, "day"));
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs()); // Store the current displayed month/year
  const [isMonthDropdownOpen, setMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setYearDropdownOpen] = useState(false);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate days of the current month
  const generateDays = () => {
    const days = [];
    const startOfMonth = currentDate.startOf("month"); // First day of the current month
    const endOfMonth = currentDate.endOf("month"); // Last day of the current month

    const firstDayOfMonth = startOfMonth.day(); // Day of the week (0-6) for the first day
    const totalDaysInMonth = endOfMonth.date(); // Total days in the current month

    // Add blank days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= totalDaysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const handleDateClick = (day: number | null) => {
    if (day) {
      const newDate = currentDate.date(day);
      setSelectedDate(newDate);
      setCalendarOpen(false);
    }
  };

  const handleMonthChange = (increment: number) => {
    setCurrentDate(currentDate.add(increment, "month"));
  };

  const handleMonthSelect = (monthIndex: number) => {
    setCurrentDate(currentDate.month(monthIndex));
    setMonthDropdownOpen(false);
  };

  const handleYearSelect = (year: number) => {
    setCurrentDate(currentDate.year(year));
    setYearDropdownOpen(false);
  };

  const toggleMonthSelection = () => {
    setMonthDropdownOpen(!isMonthDropdownOpen);
    setYearDropdownOpen(false);
  };
  const toggleYearSelection = () => {
    setYearDropdownOpen(!isYearDropdownOpen);
    setMonthDropdownOpen(false);
  };

  return (
    <div className={styles.datePicker}>
      <div
        className={styles.datePickerInput}
        onClick={() => setCalendarOpen(!isCalendarOpen)}
      >
        {selectedDate
          ? `Report at ${selectedDate.format("DD MMM YYYY")}`
          : "Select a date"}
      </div>

      {isCalendarOpen && (
        <div className={styles.datePickerCalendar}>
          <div className={styles.datePickerHeader}>
            <div className={styles.datePickerSelector}>
              {/* Month Dropdown */}
              <span
                className={styles.datePickerHeaderItem}
                onClick={toggleMonthSelection}
              >
                {currentDate.format("MMMM")}
              </span>
              {isMonthDropdownOpen && (
                <div className={styles.monthDropdown}>
                  {months.map((month, index) => (
                    <div
                      key={month}
                      className={styles.dropdownItem}
                      onClick={() => handleMonthSelect(index)}
                    >
                      {month}
                    </div>
                  ))}
                </div>
              )}

              {/* Year Dropdown */}
              <span
                className={styles.datePickerHeaderItem}
                onClick={toggleYearSelection}
              >
                {currentDate.format("YYYY")}
              </span>
              {isYearDropdownOpen && (
                <div className={styles.yearDropdown}>
                  {years.map((year) => (
                    <div
                      key={year}
                      className={styles.dropdownItem}
                      onClick={() => handleYearSelect(year)}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.nav}>
              <button
                className={styles.navButton}
                onClick={() => handleMonthChange(-1)}
              >
                &#8249;
              </button>
              <button
                className={styles.navButton}
                onClick={() => handleMonthChange(1)}
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className={styles.datePickerDays}>
            {daysOfWeek.map((day) => (
              <div key={day} className={styles.dayOfWeek}>
                {day}
              </div>
            ))}
            {generateDays().map((day, index) => (
              <div
                key={index}
                className={`${styles.datePickerDay} ${
                  day === selectedDate?.date() &&
                  currentDate.month() === selectedDate?.month() &&
                  currentDate.year() === selectedDate?.year()
                    ? styles.selected
                    : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
