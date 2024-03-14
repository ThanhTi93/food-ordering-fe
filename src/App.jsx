import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Card from "./component/Cart/Cart";
import Profile from './component/Profile/Profile';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Card/> */}
      {/* <Profile/> */}
      <CustomerRoutes/>
    </ThemeProvider>
  );
}

export default App;
