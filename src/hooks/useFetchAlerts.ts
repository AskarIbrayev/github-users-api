import { useEffect } from "react"
import { useAlert } from "./useAlert"

const useFetchAlerts = (data: any, isLoading: boolean, error: Error | null, dataType: 'user' | 'repos') => {

    const { addAlert } = useAlert()
    useEffect(() => {
        if (isLoading) {
            addAlert({ message: `Fetching ${dataType}...`, type: 'info' })
        }
        if (error !== null) {
            addAlert({ message: error.message, type: 'error' })
        }
        if (dataType === 'user' && data) {
            addAlert({ message: 'User fetched successfully', type: 'success' })
        }
        if (dataType === 'repos' && data?.length) {
            addAlert({ message: 'Repos fetched successfully', type: 'success' })
        }
        if (dataType === 'repos' && (data && !data.length)) {
            addAlert({ message: "User doesn't have any public repositories yet", type: 'warning' })
        }
    }, [data, error, isLoading])
}
export default useFetchAlerts