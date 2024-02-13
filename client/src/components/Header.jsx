import { useAccountContext } from '../utils/GlobalState';
import Services from './ServicePage';
import '../App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const Header = () => {
  const [state] = useAccountContext();

  return (
    <header className="App-header">
      {state.isLoggedIn ? 
        <h1 classNAme="App-header">Welcome {state.userName}!</h1>
        :
        <h1>Welcome to React Salon!</h1>
      }
      <Router>
        <nav>
          <Routes>
            <Route path="/" element={<Services />} />
          </Routes>
        </nav>
      </Router>
    </header>
  )
}

export default Header;
