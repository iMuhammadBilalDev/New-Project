import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default styles
import { format } from 'date-fns'; // Import date formatting utility

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">My Calendar</h2>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <Calendar
          onChange={onChange}
          value={date}
          className="react-calendar rounded-lg"
          tileClassName={({ date, view }) => (view === 'month' ? 'hover:bg-blue-200' : '')}
          prevLabel={<span className="text-gray-500">◀</span>}
          nextLabel={<span className="text-gray-500">▶</span>}
        />
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-gray-700">Selected Date:</h3>
        <p className="text-gray-600 text-lg">{format(date, 'EEEE, MMMM do, yyyy')}</p>
      </div>
    </div>
  );
};

export default CalendarPage;
