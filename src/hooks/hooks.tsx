import { useState, useEffect } from 'react'
import axios from 'axios'

type hit = {
    hits: []
}

type dataType = {
    data: hit[],
}

const useFetchData = (URL:string) => {
    const [data, setData] = useState<dataType>()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [url, setUrl] = useState(URL)
    
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)
        try {
            const res = await axios(url)
            setData(res)
        } catch (error) {
            setIsError(true)
        }
            setIsLoading(false)
        }
        fetchData()
    }, [url])

    return [{data, isLoading, isError}, setUrl] as const
}

export default useFetchData

