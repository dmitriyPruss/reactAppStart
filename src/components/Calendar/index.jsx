import React, { Component } from 'react';
import Day from './Day';
import Month from './Month';
import styles from './Calendar.module.scss';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(2012, 11, 22),
    };
  }

  render() {
    const { date } = this.state;
    return (
      <article className={styles.calendarContainer}>
        <Day date={date} />
        <Month date={date} />
      </article>
    );
  }
}

export default Calendar;

