import { nanoid } from "nanoid";
import React, { memo, useState } from "react";
import { AlertContext } from "../../hooks/useAlert";
import { IAddAlert, IAlert } from "../../types";

const AlertProvider = memo(({ children }: {children: React.ReactNode}) => {
    const [alerts, setAlerts] = useState<IAlert[]>([])
    const [isAlertsShown, setIsAlertsShown] = useState(false)
    const [isAddAlertModalOpen, setIsAddAlertModalOpen] = useState(false)
    const [alertHideTimeout, setAlertHideTimeout] = useState<number>(7000)
    const addAlert = ({ message, type }: IAddAlert) => {
        setIsAlertsShown(true)
        setAlerts([...alerts, { message, type, id: nanoid() }])
    }
    const closeAlert = (id: string) => {
        setAlerts(alerts.filter(alert => alert.id !== id))
    }
    const closeAllAlerts = () => {
        setAlerts([])
        setIsAlertsShown(false)
    }
    return (
        <AlertContext.Provider
            value={{ 
                alerts, 
                addAlert, 
                closeAlert, 
                closeAllAlerts, 
                isAlertsShown, 
                isAddAlertModalOpen, 
                setIsAddAlertModalOpen,
                alertHideTimeout,
                setAlertHideTimeout
            }}
        >
            {children}
        </AlertContext.Provider>

    )
})
export default AlertProvider