import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../../contexts/providers/AppProvider';
import { LOCAL_STORAGE_TOKEN } from '../../utils/contant';

const OAuth2Redirect = (props) =>  {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { loadData } = useContext(AppContext);

  const token = searchParams.get('token');
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    if(token) {
      localStorage[LOCAL_STORAGE_TOKEN] = token;
      await loadData();
      navigate('/');
    } else {
      navigate('/404');
    }  
  }

  return (
    <h1>Redirect</h1>
  )
}

export default OAuth2Redirect;