import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { useAlert } from "../../hooks/useAlert"
import { IAlert } from "../../types"

const Alert = ({ alert }: { alert: IAlert }) => {
    const [isOpen, setIsOpen] = useState(true)
    const { closeAlert, alertHideTimeout } = useAlert()
    if (isOpen && (alert.type === 'info' || alert.type === 'success')) {
        setTimeout(() => {
            setIsOpen(false)
        }, alertHideTimeout)
    }
    
    if (!isOpen) {
        return null
    }

    return (
        <div className={`alert ${alert.type}`} >
            <p>{alert.message}</p>
            <button onClick={() => closeAlert(alert.id)} className="alert-close-btn">
                <IoMdClose />
            </button>
        </div>
    )
}
export default Alert