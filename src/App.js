import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import './App.css';
import AuthPage from './Pages/AuthPage';
import Crud from './Pages/Crud';

function App() {
  return (
    <div className="App">
 <Switch>
   <Route exact path ="/">
  <AuthPage/>
   </Route>
   <Route path="/crud">
       <Crud/> 
   </Route>
 </Switch>
     
        
    </div>
  );
}

export default App;
