import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './pages/Auth/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Landing from './pages/Landing/Landing';
import Users from './pages/Users/Users';
import Userlist from './pages/Userlist/Userlist'
import Hotels from './pages/Hotels/Hotels'
import Createhotel from './pages/Hotels/Createhotel/Createhotel';

function App() {
  return (
    <div className="App">
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/'>
            <Route index element={<Landing/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='users'>
              <Route index element={<Users/>} />
              <Route path=':uid' element={<Userlist/>}/>
            </Route>
            <Route path='hotels'>
              <Route index element={<Hotels/>} />
              <Route path='create' element={<Createhotel/>} />
            </Route>
            <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
        </Routes>
      </Suspense>
      </Router>
    </div>
  );
}

export default App;
