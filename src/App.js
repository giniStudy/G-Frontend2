import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Board from './pages/Board';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Board} exact />
      <Route path="/about" component={About} exact />
      <Route path="/careers" component={Careers} exact />
      <Route path="/Contact" component={Contact} exact />
    </BrowserRouter>
  );
}

export default App;
