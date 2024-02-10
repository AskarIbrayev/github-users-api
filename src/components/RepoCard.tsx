import { IRepo } from "../types"

interface RepoCardProps {
    repo: IRepo
}
const RepoCard = ({repo}: RepoCardProps) => {
    return (
        <li className="repos-item">
            <span className="repos-item--name">{repo.name}</span>
            <p>{repo.description}</p>
            <footer>
                {repo.homepage && 
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="repo_homepage">home url</a> 
                }
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo_url">repo url</a>
            </footer>
        </li>
    )
}

export default RepoCard