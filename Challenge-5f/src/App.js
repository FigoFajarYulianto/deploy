import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CarDetails from './pages/Detail/detailMobil';
import Pencarian from './pages/Pencariann/PencarianMobil';
import Home from './pages/Home/home';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search-result/:driverType/:date/:pickUpTime' element={<Pencarian />} />
          <Route path='search-result/:driverType/:date/:pickUpTime/:totalPassenger' element={<Pencarian/>} />
          <Route path='car/:id' element={<CarDetails />} />


        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
