import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import Card from './components/Card';
import Theme from './Theme';
import GlobalStyles from './components/styles/Global';
import content from './content';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
         <Card key={index} item={item} />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;
