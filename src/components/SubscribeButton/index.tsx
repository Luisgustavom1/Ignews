import React from 'react';

import styles from './styles.module.scss';

const SubscribeButton: React.FC = () => {
  return(
      <button className={styles.subscribeButton}>
          Subscribe Now
      </button>
  );
}

export default SubscribeButton;