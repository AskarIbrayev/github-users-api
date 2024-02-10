export interface IUser {
    login: string,
    avatar_url: string,
    html_url: string,
    repos_url: string,
    name: string,
    location: string,
    email: string,
    bio: string,
    blog: string,
    public_repos: number,
}

export interface IRepo {
    name: string,
    description: string,
    html_url: string,
    homepage: string,
}

export type AlertType = 'error' | 'warning' | 'info' | 'success'

export interface IAddAlert {
    type: AlertType,
    message: string,
}
export interface IAlert extends IAddAlert {
    id: string
}
export interface IAlertContext {
    alerts: IAlert[]
    setAlerts: React.Dispatch<React.SetStateAction<IAlert[]>>,
    isAlertsShown: boolean,
    isAddAlertModalOpen: boolean,
    setIsAddAlertModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    addAlert: ({message, type}: {message: string, type: 'error' | 'warning' | 'info' | 'success'}) => void,
    closeAlert: (id: string) => void,
    closeAllAlerts: () => void,
    alertHideTimeout: number,
    setAlertHideTimeout: React.Dispatch<React.SetStateAction<number>>,
}
