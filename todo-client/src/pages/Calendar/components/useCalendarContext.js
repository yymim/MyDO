import { createContext, useContext } from "react";

// 타입 제거된 CalendarContext
export const CalendarContext = createContext(null);

export default function useCalendarContext() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendarContext must be used within CalendarProvider");
  }
  return context;
}
