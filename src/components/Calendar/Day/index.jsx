import React from 'react';
import { format } from 'date-fns';
import styles from './../Calendar.module.scss';

function Day( props ) {
  const { date } = props;
  const formatDate = format(date, 'eeee').toUpperCase();

  return (
    <section className={styles.dayContainer}>
      <div className={styles.dayOfWeek}>{formatDate}</div>
      <div className={styles.dayOfMonth}>{date.getDate()}</div>
    </section>
  );
}

export default Day;