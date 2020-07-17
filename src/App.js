import React from 'react';
import './css/App.css';
import {GlobalContectProvider} from './context/GlobalContext';

// components 
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <GlobalContectProvider>
    <div className="App container">
      {/* <div className="row"> */}
          {/* <div className="col-12"> */}
              <Header />
              <hr />
              <Balance />
              <IncomeExpense />
              <TransactionList />
              <AddTransaction />
          {/* </div> */}
      {/* </div> */}
    </div>
    </GlobalContectProvider>
  );
}

export default App;
