import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import NotLogin from './components/NotLogin';

function App() {
  const state = useSelector((state) => state.user)

  return (
    <div className="App">
      {state.profile.login ? <Login /> : <NotLogin />}


    </div>
  );
}

export default App;
