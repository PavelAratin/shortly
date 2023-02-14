
import React from 'react';
import Header from '../components/header/Header';
import Head from 'next/head';
import Hero from '../components/hero/Hero';
import ShortLinkSrvice from '../components/shortLinkService/ShortLinkService';
import AdvancedStatics from '../components/advancedStatics/AdvancedStatics';
import BoostLinks from '../components/bostyLinks/BoostLinks';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Сервис для создания коротких ссылок</title>
        <link rel="icon" href="./favicon-link.png" />
      </Head>
      <Header></Header>
      <Hero></Hero>
      <ShortLinkSrvice></ShortLinkSrvice>
      <AdvancedStatics></AdvancedStatics>
      <BoostLinks></BoostLinks>
      <Footer></Footer>
    </React.Fragment>
  )
}
