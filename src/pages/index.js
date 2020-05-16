import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'NormanWongCL Website'}</title>
        <html lang={lang || 'en'} />
        <meta property="og:url" content="https://normanwongcl.com" />
        <meta property="og:title" content={title || 'NormanWongCL Website'} />
        <meta
          name="description"
          property="og:description"
          content={description || 'Norman Wong Chiew Look Website'}
        />
      </Helmet>
      <App />
    </>
  );
};
