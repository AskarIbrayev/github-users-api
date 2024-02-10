import { useMemo, useState } from "react"
import { IRepo } from "../types"
import AlertInline from "./alert/AlertInline"
import ReposList from "./ReposList"

interface ReposProps {
    repos: IRepo[],
}

const Repos = ({ repos }: ReposProps) => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const searchedRepos = useMemo(() => {
        if (searchQuery) {
            return repos.filter(repo => repo.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return repos
    }, [repos, searchQuery])

    const repoHeader = <div className="repos-header">
        <h3 className="repos-header--title">Repositories ({repos.length})</h3>
        <input
            type="text"
            placeholder="Search repository"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>

    if (!repos.length) {
        return <>
            {repoHeader}
            <AlertInline type="info" alertText="User doesn't have any public repositories yet" />
        </>
    }
    if (repos.length && !searchedRepos.length) {
        return <>
            {repoHeader}
            <AlertInline type="warning" alertText="No match to your search query" />
        </>
    }
    return <>
        {repoHeader}
        <ReposList repos={searchedRepos} />
    </>
}

export default Repos