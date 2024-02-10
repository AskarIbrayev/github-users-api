import { useEffect, useState } from "react"

const fetchUrl = async (url: string) => {
    const res = await fetch(url)
    const json = await res.json()

    if (!res.ok) {
        throw json
    }
    return json
}

export const useFetch = <T>(url: string | undefined) => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        if (url) {
            setIsLoading(true)
            setError(null)
            setData(null)
            fetchUrl(url)
                .then(data => {
                    setData(data)
                })
                .catch(error => {
                    setError(error)
                    setData(null)
                })
                .finally(() => setIsLoading(false))
        }
    }, [url])
    return [data, isLoading, error] as const
}