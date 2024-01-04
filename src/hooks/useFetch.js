import { useEffect, useState } from "react"

const useFetch = (url, opts = {}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        if (!url) return
        handler(url)
    }, [url])

    function handler(url) {
        setIsLoading(true)

        fetch(url, opts)
            .then(d => d.json())
            .then(r => setData(r))
            .catch(e => setIsError(e))
            .finally(() => setIsLoading(false))
    }

    return { data, isLoading, isError, handler }
}

export default useFetch