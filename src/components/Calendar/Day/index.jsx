import React from 'react';
import { format } from 'date-fns';
import styles from './../Calendar.module.scss';

function Day() {
  const currentDate = new Date();
  const formatDate = format(currentDate, 'eeee').toUpperCase();

  return (
    <section className={styles.dayContainer}>
      <div className={styles.dayOfWeek}>{formatDate}</div>
      <div className={styles.dayOfMonth}>{currentDate.getDate()}</div>
    </section>
  );
}

export default Day;