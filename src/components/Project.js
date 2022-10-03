function Project ({title, github, deployedLink, image}) {
    return (
        <div className='project d-flex flex-column'>
            <h3>{title}</h3>
            <div className="flex-grow-1 d-flex flex-column justify-sm-content-end">
                <p>
                    <a href={github} alt={title + " Github link"}>Link to Github</a><br />
                    <a href={deployedLink} alt={title + " Deployed link"}>Deployed link</a>
                </p>
                <img className="w-100" src={image} alt={title + " Image link"} />
            </div>
        </div>
    );
}

export default Project;
