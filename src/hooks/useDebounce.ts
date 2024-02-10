import { useRef } from "react"

export const useDebounce = <T extends (...args: any) => void>(cb: T, delay: number) => {
    const debounce = (cb: T, delay: number) => {
        let timeout: NodeJS.Timeout | null
        return ((...args) => {
            if (timeout != null) {
                clearTimeout(timeout)
                timeout = null
            }
            timeout = setTimeout(cb, delay, ...args)
        }) as T
    }
    const ref = useRef(debounce(cb, delay))
    return ref.current
}
