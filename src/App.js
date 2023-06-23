import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Employees from './components/Employees.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Employees/>
    <Footer/>
 
    </div>
  );
}

export default App;

