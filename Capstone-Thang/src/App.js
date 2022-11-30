
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Layouts/Header';
import Main from './Layouts/Main';
import Footer from './Layouts/Footer';

function App() {

  return (
    <Router>
      <div className='app'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Router>
      
  )
}

export default App;
