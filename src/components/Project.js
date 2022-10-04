function Project ({title, github, deployedLink, image}) {
    return (
        <div className='project d-flex flex-column'>
            <h3>{title}</h3>
            <div className="flex-grow-1 d-flex flex-column justify-sm-content-end">
                <p className="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row">
                    <a href={github} alt={title + " Github link"} target="_blank" rel="noreferrer" className="fa fa-github my-1 my-sm-0"> Github Repo</a>
                    <a href={deployedLink} alt={title + " Deployed link"} target="_blank" rel="noreferrer" className="fa fa-lightbulb-o my-1 my-sm-0"> Live Version</a>
                </p>
                <img className="w-100" src={image} alt={title + " Image link"} />
            </div>
        </div>
    );
}

export default Project;
