import React from 'react';
import PropTypes from 'prop-types';

import styles from './Greeting.module.css';

// Принять пропс isGreeting
function Greeting(props) {
  const { name, isGreeting } = props;

  return (
    <div className={styles.container}>
      {isGreeting ? 'Hello' : 'Goodbye'} {name}
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  isGreeting: PropTypes.bool,
};

Greeting.defaultProps = {
  isGreeting: true,
};

export default Greeting;
//rfce