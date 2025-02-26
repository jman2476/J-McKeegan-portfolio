import portfolioArr from '../components/portfolioArr'

function FolioItem(name, img_path, github_url, description) {
    return (
        <div key={name}>
            <h3>{name}</h3>
            <h4>{github_url}</h4>
            <a href={github_url}>Github Repo</a>
            <p>{description}</p>
            <img src={img_path} alt={description} width='50' height='50' />
        </div>
    )
}

function Portfolio() {
    const folioItemsGen = portfolioArr.map(obj => FolioItem(obj.name, obj.img_path, obj.gitHub_url, obj.description))

    return (
        <>
            <h2>Here's my portfolio</h2>
            <li>{folioItemsGen}</li>
        </>
    )
}

export default Portfolio