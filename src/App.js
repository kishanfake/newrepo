import logo from './logo.svg';
import './App.css';
import CButton from './components/CButton/cButton';
import CInput from './components/CInput/CInput';
import Form from './pages/form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (
    <div style={{ maxWidth: 500, justifyContent: "center", margin: 'auto',marginTop:100 }} className="App">
      <Form />
    </div>
  );
}

export default App;
