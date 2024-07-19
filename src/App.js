import Header from './components/Header'
import './App.css';
import Balance from './components/Balance';
import IncomExpenses from './components/IncomExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <GlobalProvider>
        <Header/>
        <div className='container'>
        <Balance/>
        <IncomExpenses/>
        <TransactionList/>
        <AddTransaction/>

        </div>
        
      </GlobalProvider>
    </>
  );
}

export default App;
