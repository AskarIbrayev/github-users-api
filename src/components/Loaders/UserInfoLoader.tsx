import ContentLoader from "react-content-loader"

const UserInfoLoader = () => (
    <ContentLoader
        speed={2}
        width={800}
        height={176}
        viewBox="0 0 800 150"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="725" cy="75" r="75" />
        <rect x="0" y="0" rx="6" ry="6" width="140" height="18" />
        <rect x="0" y="40" rx="6" ry="6" width="220" height="26" />
        <rect x="0" y="90" rx="6" ry="6" width="149" height="18" />
        <rect x="0" y="130" rx="6" ry="6" width="250" height="18" />
        
    </ContentLoader>
)

export default UserInfoLoader

