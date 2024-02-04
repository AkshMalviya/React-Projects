import { useState } from 'react'
import './App.css'
import { Input } from './components'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState("inr")
    const [convertAmount, setConvertAmount] = useState(0)
    const currencyInfo = useCurrencyInfo(from)
    console.log(currencyInfo);
    const options = Object.keys(currencyInfo)
    function swap() {
        setFrom(to)
        setTo(from)
        setAmount(convertAmount)
        setConvertAmount(amount)
    }
    function convert() {
        setConvertAmount(amount * currencyInfo[to])
    }
    return (
        <div className='w-full h-screen bg-cover flex' style={{ backgroundImage: `url("https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=600")` }}>
            <div className='w-full max-w-md mx-auto my-auto  border border-gray-60 rounded-lg p-5 background-blur-sm bg-white/30 '>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                }}
                >
                    <div className="w-full mb-1 ">
                        <Input
                            label='From'
                            amount={amount}
                            currencyOption={options}
                            onCurrencyChange={(curr) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amt) => setAmount(amt)}
                        />
                    </div>
                    <div className='relative w-full h-0.5'>
                        <button type='button' className='absolute left-1/2 -traslate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                            onClick={swap}
                        >
                            Swap
                        </button>
                    </div>
                    <div className='w-full mt-1 mb-4'>
                        <Input
                            label='To'
                            amount={convertAmount}
                            currencyOption={options}
                            onCurrencyChange={(curr) => setTo(curr)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' type='submit'>Convert</button>
                </form>
            </div>
        </div>
    )
}

export default App
