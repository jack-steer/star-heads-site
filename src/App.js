import './App.css';
import NavigationContainer from './components/NavigationContainer';

function App() {
  // useState to render different pages and pass to navigation container
  return (
    <div className="app-container">
      <NavigationContainer></NavigationContainer>
    </div>
  );
}

export default App;
