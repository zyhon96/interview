import './App.scss';
import Navbar from './components/Navbar';
import Leftbar from '../src/components/Leftbar'
import Middlebar from '../src/components/Middlebar'
import Rightbar from '../src/components/Rightbar'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="main">
       <Leftbar/>
       <Middlebar/>
       <Rightbar/>
     </div>
    </div>
  );
}

export default App;
