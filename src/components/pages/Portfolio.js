import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Project from '../Project';

function Portfolio ({currentPage, handlePageChange}) {
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <section>
                <h1>Projects</h1>
                <Project 
                    title="Bootcamp Portfolio" 
                    github="https://github.com/marcelamejiao/Bootcamp-Portfolio" 
                    deployedLink="https://marcelamejiao.github.io/Bootcamp-Portfolio/"
                    image=""
                />
                <Project 
                    title="Text Editor" 
                    github="https://github.com/marcelamejiao/Text-Editor" 
                    deployedLink="https://salty-cove-60850.herokuapp.com"
                    image=""
                />
                <Project 
                    title="Weather Dashboard" 
                    github="https://github.com/marcelamejiao/Weather-Dashboard" 
                    deployedLink="https://marcelamejiao.github.io/Weather-Dashboard/"
                    image=""
                />
                <Project 
                    title="Pawfect Match" 
                    github="https://github.com/marcelamejiao/pawfect-match" 
                    deployedLink="https://pawfect---match.herokuapp.com"
                    image=""
                />
                <Project 
                    title="Umbrella Address Book" 
                    github="https://github.com/marcelamejiao/Umbrella-Address-Book" 
                    deployedLink="https://marcelamejiao.github.io/Umbrella-Address-Book/"
                    image=""
                />
                <Project 
                    title="Tech Blog" 
                    github="https://github.com/marcelamejiao/Tech-blog" 
                    deployedLink="https://el-tech-blog-mar.herokuapp.com"
                    image=""
                />
            </section>
            <Footer /> 
        </div>
    );
}

export default Portfolio;