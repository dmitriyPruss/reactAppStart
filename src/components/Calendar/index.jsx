import React, { Component } from 'react';
import Day from './Day';
import Month from './Month';
import styles from './Calendar.module.scss';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
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

