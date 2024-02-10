import ContentLoader from "react-content-loader"

const ReposLoader = () => (
    <ContentLoader
        speed={2}
        width={800}
        height={450}
        viewBox="0 0 800 450"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        >
        <rect x="0" y="12" rx="6" ry="6" width="140" height="20" />
        <rect x="0" y="38" rx="6" ry="6" width="800" height="22" />

        <rect x="16" y="72" rx="6" ry="6" width="140" height="18" />
        <rect x="16" y="100" rx="6" ry="6" width="358" height="54" />
        <rect x="215" y="176" rx="6" ry="6" width="75" height="18" />
        <rect x="300" y="176" rx="6" ry="6" width="75" height="18" />

        <rect x="426" y="72" rx="6" ry="6" width="140" height="18" />
        <rect x="426" y="100" rx="6" ry="6" width="358" height="54" />
        <rect x="625" y="176" rx="6" ry="6" width="75" height="18" />
        <rect x="710" y="176" rx="6" ry="6" width="75" height="18" />
    </ContentLoader>
)

export default ReposLoader

