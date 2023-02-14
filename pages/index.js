
import React from 'react';
import Head from 'next/head';
import Hero from '../components/hero/Hero';
import ShortLinkSrvice from '../components/shortLinkService/ShortLinkService';
import AdvancedStatics from '../components/advancedStatics/AdvancedStatics';
import BoostLinks from '../components/bostyLinks/BoostLinks';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Сервис для создания коротких ссылок</title>
        <link rel="icon" href="./favicon-link.png" />
      </Head>
      <Hero></Hero>
      <ShortLinkSrvice></ShortLinkSrvice>
      <AdvancedStatics></AdvancedStatics>
      <BoostLinks></BoostLinks>
    </React.Fragment>
  )
}
