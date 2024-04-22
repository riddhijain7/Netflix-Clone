import './App.css';
import Nav from './components/Nav';

import Main from './components/Main'
import SearchResults from './components/SearchResults'
import { SearchProvider } from './context/SearchContext';


function App() {
  return (

    <div className='App'>
      <SearchProvider>
         <Nav/>
          <Main />
          <SearchResults />
      </SearchProvider>
      
    </div>)

}

export default App;
