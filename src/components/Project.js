function Project ({title, github, deployedLink, image}) {
    return (
        <div>
            <h2>{title}</h2>
            <div>
            <a href={github} alt={title + " Github link"}>Link to Github</a>
            </div>
            <div>
            <a href={deployedLink} alt={title + " Deployed link"}>Deployed link</a>
            </div>
            <img src={image} alt={title + " Image link"} />
        </div>
    );
}

export default Project;