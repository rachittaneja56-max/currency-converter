//Here a custom hook is made to call the function when  we want to do currency conversion

import { useEffect,useState } from "react";

function useCurrencyInfo(currency) {
    
    const [data,setData] = useState({})  //default value is empty object so that the code does not crash when api is not called

     useEffect( ()=>{             // when usecurrencyinfo hook is called then useeffect runs automatically
         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
         .then( (res)=> res.json())
         .then( (res)=> setData(res[currency]) )
     }, [currency])  // in dependency array we added currency because we want to change the currency every time user changes it
     console.log(data)
     return data
}

export default useCurrencyInfo   // allows other file to use this file in thier code as a hook