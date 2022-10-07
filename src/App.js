import './App.css';
import NavigationContainer from './components/NavigationContainer';
import SearchContainer from './components/SearchContainer';
import ResultsContainer from './components/ResultsContainer';

function App() {
  // useState to render different pages and pass to navigation container
  return (
    <div className="app-container">
      <NavigationContainer></NavigationContainer>
      <SearchContainer></SearchContainer>
      {/* Advanced search container (Indervidual boxes for each criteria) */}
      <ResultsContainer></ResultsContainer>
    </div>
  );
}

export default App;
