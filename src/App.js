import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';

function App() {
  return (
    <div id="main-site">
      <Sidebar />

      <div id="main-page">
        <Home />
      </div>
    </div>
  );
}

export default App;
