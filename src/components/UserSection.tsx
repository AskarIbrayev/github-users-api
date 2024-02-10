import useFetchAlerts from "../hooks/useFetchAlerts"
import { IUser } from "../types"
import AlertInline from "./alert/AlertInline"
import UserInfoLoader from "./Loaders/UserInfoLoader"
import UserInfo from "./UserInfo"

interface UserSectionProps {
    user: IUser | null,
    isLoading: boolean,
    error: Error | null
}


const UserSection = ({ user, isLoading, error }: UserSectionProps) => {

    useFetchAlerts(user, isLoading, error, 'user')   

    if (isLoading) {
        return <UserInfoLoader />
    }
    if (error != null) {
        return <AlertInline type="error" alertText={error.message}  />
    }
    if (user) {
        return <UserInfo user={user} />
    }
    return null
}

export default UserSection