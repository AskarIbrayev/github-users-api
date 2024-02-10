import React from "react"
import { useDebounce } from "../hooks/useDebounce"

interface SearchBarProps {
    handleSearchInput: (value: string) => void,
    placeholder: string,
}
const SearchBar = ({ handleSearchInput, placeholder }: SearchBarProps) => {
    const debouncedValue = useDebounce(handleSearchInput, 600)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedValue(e.target.value)
    }

    return (
        <input 
            type="text" 
            placeholder={placeholder} 
            onChange={handleInputChange} 
        />
    )
}

export default SearchBar