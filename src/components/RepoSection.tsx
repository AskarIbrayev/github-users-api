import { useFetch } from "../hooks/useFetch"
import useFetchAlerts from "../hooks/useFetchAlerts"
import { IRepo } from "../types"
import AlertInline from "./alert/AlertInline"
import ReposLoader from "./Loaders/ReposLoader"
import Repos from "./Repos"

const RepoSection = ({ repos_url }: {repos_url: string | undefined}) => {
    const [repos, isLoading, error] = useFetch<IRepo[]>(repos_url)
    
    useFetchAlerts(repos, isLoading, error, 'repos')

    if (isLoading) {
        return <ReposLoader />
    }
    if (error) {
        return <AlertInline type="error" alertText={error.message} />
    }
    if (repos) {
        return <Repos repos={repos} />
    }
    return null
}
export default RepoSection