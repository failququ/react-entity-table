import { observer } from 'mobx-react-lite';
import React from 'react';
import HomePage from './pages/HomePage';
import TablePage from './pages/TablePage';
import storeAuthForm from './store/authForm';

const App = observer(() => {
  return (
    <div className="App">
        {storeAuthForm.isAuth ? <TablePage/>  : <HomePage/> }
    </div>
  );
})

export default App;
