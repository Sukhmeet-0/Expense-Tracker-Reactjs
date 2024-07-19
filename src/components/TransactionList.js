import React ,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transactions from './Transactions'

function TransactionList() {
    const {transactions} = useContext(GlobalContext)
  return (
    <>
        <h3>History</h3>
        <ul id='list' className='list'>
            {transactions.map(transaction=>(
                <Transactions transaction={transaction} key={transaction.id} />
            ))}
            
        </ul>
    </>
  )
}

export default TransactionList
