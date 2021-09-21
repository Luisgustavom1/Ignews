import React from 'react';

import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/client';
import { getStripeJs } from '../../services/stripe-js';
import { api } from '../../services/api';

interface SubscribeButtonProps {
  priceId: string
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ priceId }) => {
  const [session] = useSession();

  async function handleSubscribe() {
    if(!session) {
      signIn('github');
      return;
    } else {
      try {
        const response = await api.post('/subscribe');

        const { sessionId } = response.data;
        
        const stripe = await getStripeJs();

        return stripe.redirectToCheckout({ sessionId });
      } catch (e) {
        alert(e.message)
      }
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