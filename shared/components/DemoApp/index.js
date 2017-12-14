import 'normalize.css/normalize.css';

import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';

import config from '../../../config';

import './globals.css';

import Error404 from './Error404';
import Header from './Header';
import AsyncHomeRoute from './AsyncHomeRoute';
import AsyncCounterRoute from './AsyncCounterRoute';
import AsyncAboutRoute from './AsyncAboutRoute';
import HomeView from './HomeView';

function DemoApp() {
  return (
    <div style={{}}>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="application-name" content={config('htmlPage.defaultTitle')} />
        <meta name="description" content={config('htmlPage.description')} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#2b2b2b" />
        <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
        <meta name="theme-color" content="#2b2b2b" />
        <title>{config('htmlPage.defaultTitle')}</title>
        {/*
          A great reference for favicons:
          https://github.com/audreyr/favicon-cheat-sheet
          It's a pain to manage/generate them. I run both these in order,
          and combine their results:
          http://realfavicongenerator.net/
          http://www.favicomatic.com/
        */}

        <link rel="manifest" href="/manifest.json" />

        {/*
          NOTE: This is simply for quick and easy styling on the demo. Remove
          this and the related items from the Content Security Policy in the
          global config if you have no intention of using milligram.
        */}
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
        />
        <link
          rel="stylesheet"
          href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css"
        />
      </Helmet>
      <Header />
      <div style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/counter" component={AsyncCounterRoute} />
          <Route path="/about" component={AsyncAboutRoute} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default DemoApp;
