import React from 'react';
import Link from 'next/link';

import SignInButton from '../SignInButton'

import styles from './styles.module.scss';
import ActiveLink from '../ActiveLink';

const Header: React.FC = () => {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img 
          src='/images/logo.svg'
          alt='Img Logo'
          />
        <nav>
          <ActiveLink
            href='/'
            activeClassName={styles.active}
          >
            <a>Home</a>
          </ActiveLink>
          <ActiveLink
            href='/posts'
            activeClassName={styles.active}
            prefetch
          >
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton /> 
      </div>
    </header>
  );
}

export default Header;