import './App.css';
import { useContext } from 'react';
import { AppContext } from './contexts/providers/AppProvider';
import Loading from './components/common/Loading';
import {
  Routes,
  Route
} from "react-router-dom";
import LayoutAdmin from './pages/admin/LayoutAdmin';
import LayoutClient from './pages/client/LayoutClient';

import NotFound from './pages/404/NotFoundPage';

import HomePage from './pages/client/HomePage';
import ProductPage from './pages/client/ProductPage';

import Dashboard from './pages/admin/DashboardPage';


function App() {
  const { appState } = useContext(AppContext);
  
  if(appState.status.isLoading) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  } else {
    if(appState.role === 'ADMIN') {
      return (
        <Routes>     
          <Route path='/admin' element={<LayoutAdmin />}>
            <Route path='dashboard' element={<Dashboard />}/>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      )
    } else {
      return (
        <Routes>     
          <Route path='/' element={<LayoutClient />}>
            <Route path='' element={<HomePage />}/>
            <Route path='product' element={<ProductPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      )
    }
  }

}

export default App;
