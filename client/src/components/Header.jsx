import { useAccountContext } from '../utils/GlobalState';
import Services from './ServicePage';
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
        <h1>Welcome! Please log in!</h1>
      }
      <Router>
        <nav>
          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/" element={<Services />} />
          </Routes>
        </nav>
      </Router>
    </header>
  )
}

export default Header;
