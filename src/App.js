import swal from 'sweetalert';
import NavigationBar from './components/NavigationBar';
import './style/App.css'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="Body">
        <h1>Hello World!</h1>
      </div>
    </div>
  );
}

export default App;
