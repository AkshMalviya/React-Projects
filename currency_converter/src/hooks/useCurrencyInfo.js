import { useEffect, useState } from "react";

function useCurrencyInfo(curr) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curr}.json`)
            .then((data) => data.json())
            .then((data) => setData(data[curr]))
    }, [curr])
    return data
}
export default useCurrencyInfo