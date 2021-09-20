import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

const SignInButton: React.FC = () => {
  const signed = false;
  return !signed ? (
    <button
        type='button'
        className={styles.signInButton}
    >
      <FaGithub 
        color='eba417'
      />
      Sign in with GitHub
    </button> 
  ) : (
    <button
        type='button'
        className={styles.signInButton}
    >
      <FaGithub 
        color='04D361'
      />
      Luisao Monstro
      <FiX />
    </button> 
  )
}

export default SignInButton;