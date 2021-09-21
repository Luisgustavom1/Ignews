import { signIn, signOut, useSession } from 'next-auth/client';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

const SignInButton: React.FC = () => {
  const [session] = useSession();

  console.log(session);
  

  return !session ? (
    <button
        type='button'
        className={styles.signInButton}
        onClick={() => signIn('github')}
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
      {session.user.name}
      <FiX 
        onClick={() => signOut()}
      />
    </button> 
  )
}

export default SignInButton;