import {useEffect,useState} from 'react'

const PREFIX ="codepen-clone-"
// stroing the data i.e output and code in local storage so that whenever we refresh the page it remains as it is.
export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if(jsonValue != null) return JSON.parse(jsonValue)

        if(typeof initialValue === 'function'){
            return initialValue()
        }
            else{
                    return initialValue
            }
    })

    useEffect(() =>{
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

  return [value, setValue]
}
