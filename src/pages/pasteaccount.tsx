import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import PasteAccount from '@/components/PasteAccountComponent';

const PasteAccountPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sir Pwn A Lot</title>
        <meta name="description" content="Find out where you have been pwned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PasteAccount />
      </main>
    </div>
  )
}

export default PasteAccountPage
