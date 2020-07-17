import React,{useContext,useState} from 'react'
import {GlobalContext} from '../context/GlobalContext';

const AddTransaction = () => {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTransaction({
            id:Math.floor(Math.random()*10000),
            text,
            amount:+amount
        })
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label>Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction;