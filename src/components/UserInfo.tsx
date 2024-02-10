import { IUser } from "../types"

interface UserInfoProps {
    user: IUser
}
const UserInfo = ({ user }: UserInfoProps) => {
    return (
        <section className="user-info">
            <div className="user-info-content">
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">@{user.login}</a>
                <h3 className="user-info--name">{user.name}</h3>
                <div className="user-info--details">
                    {user.email && <span>{user.email}</span>}
                    {user.blog && <span>{user.blog}</span>}
                    {user.location && <span>{user.location}</span>}
                </div>
                <p className="user-info--bio">{user.bio}</p>
            </div>
            <div className="user-avatar">
                <img src={user.avatar_url} alt={user.name} />
            </div>
        </section>
    )
}
export default UserInfo