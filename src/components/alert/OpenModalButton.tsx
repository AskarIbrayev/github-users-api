import { useAlert } from "../../hooks/useAlert"
const OpenModalButton = () => {
    const { setIsAddAlertModalOpen } = useAlert()
    return <button onClick={() => setIsAddAlertModalOpen(true)} >Add Alert</button>
}
export default OpenModalButton