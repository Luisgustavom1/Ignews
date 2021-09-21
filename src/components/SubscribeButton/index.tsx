import React from 'react';

import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/client';

interface SubscribeButtonProps {
  priceId: string
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ priceId }) => {
  const [session] = useSession();

  function handleSubscribe() {
    if(!session) {
      signIn('github');
      return;
    }
  }

  return(
      <button 
        className={styles.subscribeButton}
        onClick={() => handleSubscribe()}
        >
          Subscribe Now
      </button>
  );
}

export default SubscribeButton;