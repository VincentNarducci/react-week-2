import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/navigation';
import Movie from './components/films/clue/movie';
import Footer from './components/footer';
import './components/films/clue/movie.css';
function App() {
  return (
    <Container fluid>
      <Navigation />
      <Movie />
      <Footer />
    </Container>
  );
}

export default App;
