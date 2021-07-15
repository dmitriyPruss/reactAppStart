import React from 'react';

function CalendarDate(props) {
  const { date, dateClass } = props;
  return <td className={dateClass}>{date}</td>;
}

export default CalendarDate;