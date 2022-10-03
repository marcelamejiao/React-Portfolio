function Project ({title, github, deployedLink, image}) {
    return (
        <div className='project'>
            <h2>{title}</h2>
            <div>
            <a href={github} alt={title + " Github link"}>Link to Github</a>
            </div>
            <div>
            <a href={deployedLink} alt={title + " Deployed link"}>Deployed link</a>
            </div>
            <img className="w-100 h-50" src={image} alt={title + " Image link"} />
        </div>
    );
}

export default Project;
