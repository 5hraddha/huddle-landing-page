import React              from 'react';
import {Helmet}           from 'react-helmet';
import { ThemeProvider }  from 'styled-components/macro';
import theme              from './../../utils/theme';
import cards              from './../../utils/cards';
import GlobalStyles       from './../../GlobalStyles';
import * as Styled        from './styles';
import Header             from '../Header';
import Card               from '../Card';
import CallToAction       from '../CallToAction';
import Footer             from '../Footer';

/**
 * The main React **App** component of the Huddle landing page.
 *
 * @version 1.0.0
 * @author **Shraddha**
 */

function App(){
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Huddle</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyles />
      <Header />
      <Styled.Container>
        {cards.map(card =>
          <Card card={card} key={card.id} />)}
        <CallToAction />
      </Styled.Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;