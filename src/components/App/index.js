import React              from 'react';
import { ThemeProvider }  from 'styled-components/macro';
import theme              from './../../utils/theme';
import GlobalStyles       from './../../GlobalStyles';
import * as Styled        from './styles';
import Header             from '../Header';

function App(){
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Styled.Container>
        <h1>App</h1>
      </Styled.Container>
    </ThemeProvider>
  );
}

export default App;