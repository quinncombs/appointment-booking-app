import { useAccountContext } from '../utils/GlobalState';

const Header = () => {
  const [state] = useAccountContext();

  return (
    <header className="App-header">
      {state.isLoggedIn ? 
        <h1 classNAme="App-header">Welcome {state.userName}!</h1>
        :
        <h1>Welcome! Please log in!</h1>
      }
      <nav>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Booking</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
