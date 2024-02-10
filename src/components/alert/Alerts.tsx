import { useAlert } from "../../hooks/useAlert"
import { IoMdClose } from 'react-icons/io';
import Alert from "./Alert";

const Alerts = () => {
    const { isAlertsShown, alerts, closeAllAlerts, setAlertHideTimeout, alertHideTimeout } = useAlert()
    if (!isAlertsShown || !alerts.length) {
        return null
    }

    return (
        <div className="notifications">
            <header className='notifications-header'>
                <h4>Notifications</h4>
                <span>Hide after</span>
                <select name="timeout" id="timeout" value={alertHideTimeout} onChange={e => setAlertHideTimeout(Number(e.target.value))}>
                    <option value="3000">3s</option>
                    <option value="5000">5s</option>
                    <option value="7000">7s</option>
                    <option value="10000">10s</option>
                </select>
                <button onClick={closeAllAlerts} className="alert-close-btn close__all">
                    <IoMdClose />
                </button>
            </header>
            <div className="notification-body">
                {alerts.map((alert) => (
                    <Alert key={alert.id} alert={alert} />
                ))}
            </div>
        </div>
    )
}
export default Alerts