 import {useState} from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Chat from './Chat';
import Login from './Login';
import {useGlobalContext} from './context'



function App() {
  const [{user}, dispatch] = useGlobalContext()



  return (
    <div className="App">
      <Router>
    
      {!user? (<Login/>): 
      <>
      <Header/>
      <div className="app_body">

        <Sidebar/>
       <Switch>
            <Route path="/room/:roomId">
             <Chat/>
            </Route>
            <Route path="/">
              <h2>Welcome</h2>
            </Route>
       </Switch>
      </div>


</>
      }
      </Router>
    </div>
  );
}

export default App;
