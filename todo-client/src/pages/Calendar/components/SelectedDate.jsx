import useCalendarContext from "./useCalendarContext";

const SelectedDate = () => {
  const { selectedDate } = useCalendarContext();
  return  (
    <div>
      <h2 className="date_title">{selectedDate.date}</h2>
    </div>
  );
};

export default SelectedDate;
