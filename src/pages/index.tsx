import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import BreachedAccountComponent from '@/components/BreachedAccountComponent';

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sir Pwn A Lot</title>
        <meta name="description" content="Find out where you have been pwned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BreachedAccountComponent />
      </main>
    </div>
  )
}

export default HomePage
