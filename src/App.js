import './App.css';
import Browse from './pages/browse/browse';
import Deatils from './pages/details/Deatils';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Stream from './pages/streams/Stream';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/details' element={<Deatils />} />
        <Route path='/stream' element={<Stream />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
