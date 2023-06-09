import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import styles from '@/styles/Home.module.css';
import MainScreen from '@/components/MainScreen/MainScreen';
import Description from '@/components/Description/Description';
import PriceList from '@/components/PriceList/PriceList';
import Portfolio from '@/components/Portfolio/Portfolio';
import Contacts from '@/components/Contacts/Contacts';

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollTop(scrollTop);
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Mrs.Kogtuk</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        <Header scrollTop={scrollTop}/>
        <MainScreen scrollTop={scrollTop}/>
        <div className={styles.liner}></div>
        <Description/>`
        <div className={styles.liner}></div>
        <PriceList/>
        <div className={styles.liner}></div>
        <Portfolio/>
        <div className={styles.liner}></div>
        <Contacts/>
      </main>
    </>
  )
}

