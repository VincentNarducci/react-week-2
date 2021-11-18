import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/navigation';
import LogInBox from './components/card';
function App() {
  return (
    <Container fluid>
      <Navigation />
        <LogInBox />
    </Container>
  );
}

export default App;
