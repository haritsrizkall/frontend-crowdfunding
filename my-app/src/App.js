
import { Route, Switch } from 'react-router';
import './App.css';
import './assets/css/bootstrap.css';
import RegisterPage from './Components/Pages/RegisterPage';
import LoginPage from './Components/Pages/LoginPage';

function App() {
  return (
    <>
    <div className="Container">
      <Switch>
        <Route exact path="/">
        <LoginPage />
        </Route>
        <Route exact path="/login">
        <LoginPage />
        </Route>
        <Route exact path="/register">
        <RegisterPage />
        </Route>
      </Switch>

      </div> 
    </>
  );
}

export default App;
