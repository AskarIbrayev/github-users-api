import { createContext, useContext } from "react";
import { IAlertContext } from "../types";

export const AlertContext = createContext<IAlertContext | object>({})

export const useAlert = () => {
    const context = useContext(AlertContext)
    return context as IAlertContext
}