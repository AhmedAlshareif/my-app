import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const name = 'Ahmed Alshareif';
  const number = '+972567222788'
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <header className="App-header">
        <h1>{name}</h1>
        <p>{number}</p>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
