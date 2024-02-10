import RepoCard from "./RepoCard"
import { IRepo } from "../types"

interface ReposListProps {
    repos: IRepo[]
}

const ReposList = ({ repos }: ReposListProps) => {
    return (
        <ul className="repos">
            {repos.map(repo =>  <RepoCard repo={repo} key={repo.html_url} />)}
        </ul>
    ) 
}

export default ReposList