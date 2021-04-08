
import './App.css';
import MainTable from './components/MainTable';
import SearchBar from './components/SearchBar';
import useCountries from './Hooks/useCountries';

function App() {
  const [error, countries] = useCountries();
  //console.log(countries); just to check if  it is working 
  return (
    // add parend components inside a div
    <>
    <SearchBar />
    <MainTable countries={countries}/>
    </>
  );
}

export default App;
