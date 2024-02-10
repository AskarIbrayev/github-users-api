import React, { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { useAlert } from "../../hooks/useAlert"
import { AlertType } from "../../types"
const AddAlertModal = () => {
    const { addAlert, isAddAlertModalOpen, setIsAddAlertModalOpen } = useAlert()
    const [message, setMessage] = useState('')
    const [type, setType] = useState<AlertType>('error')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addAlert({ message, type })
        setMessage('')
        setType('error')
        setIsAddAlertModalOpen(false)
    }
    if (!isAddAlertModalOpen) {
        return null
    }
    return (
        <form className="modal" onSubmit={handleSubmit}>
            <button type="button" onClick={() => setIsAddAlertModalOpen(false)} className="alert-close-btn form-close-btn">
                <IoMdClose />
            </button>
            <h3>Add alert</h3>
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter message'/>
            <select name="selectType" value={type} onChange={(e) => setType(e.target.value as AlertType)}>
                <option value="error">error</option>
                <option value="warning">warning</option>
                <option value="success">success</option>
                <option value="info">info</option>
            </select>
            <button disabled={message.length === 0} type='submit'>Add Alert</button>
        </form>
    )
}
export default AddAlertModal