import './App.css';
import NavigationContainer from './components/NavigationContainer';
import SearchContainer from './components/SearchContainer';

function App() {
  // useState to render different pages and pass to navigation container
  return (
    <div className="app-container">
      <NavigationContainer></NavigationContainer>
      <SearchContainer></SearchContainer>
    </div>
  );
}

export default App;
