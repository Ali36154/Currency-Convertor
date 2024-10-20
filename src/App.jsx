import { useState } from 'react'

import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [count, setCount] = useState(0)
  const [amount, setamount]= useState(0); 
  const [from, setfrom]= useState("usd"); 
  const [to, setTo]= useState('inr'); 
  const [convertedAmount, setconamount]= useState(0);
  const currencyInfo= useCurrencyInfo(from)
  const options= Object.keys(currencyInfo);
  const swap= ()=>{
    setfrom(to); 
    setTo(from)
    setconamount(amount); 
    setamount(convertedAmount)
  }

  const convert= ()=>{
    setconamount(amount *currencyInfo[to])
  }

  return (
    <>
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('data:image/jpeg;base64,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')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setfrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>{setamount(amount)}}

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={()=>{
                                  swap()
                                }}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                               
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert  {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

    </>
  )
}

export default App
