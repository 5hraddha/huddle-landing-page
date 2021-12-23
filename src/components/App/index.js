import React              from 'react';
import { ThemeProvider }  from 'styled-components/macro';
import theme              from './../../utils/theme';
import cards              from './../../utils/cards';
import GlobalStyles       from './../../GlobalStyles';
import * as Styled        from './styles';
import Header             from '../Header';
import Card               from '../Card';

function App(){
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Styled.Container>
        {cards.map(card =>
          <Card card={card} key={card.id} />)}
      </Styled.Container>
    </ThemeProvider>
  );
}

export default App;