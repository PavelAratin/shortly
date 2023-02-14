import Head from 'next/head';
import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';

const FeaturesPage = () => {
  return (
    <React.Fragment>
      <Head>
      <title>Сервис для создания коротких ссылок</title>
      <link rel="icon" href="./favicon-link.png" />
      </Head>
      <Hero titleUnderConstruction="Page under construction"></Hero>
    </React.Fragment>
  )
}


export default FeaturesPage;