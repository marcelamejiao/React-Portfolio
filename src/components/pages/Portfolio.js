import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Project from '../Project';

function Portfolio ({currentPage, handlePageChange}) {
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <section className='container'>
                <h1>Projects</h1>
                <div className="row box">
                    <div className="col-12 col-md-6 col-lg-4">
                    <Project
                        title="Bootcamp Portfolio" 
                        github="https://github.com/marcelamejiao/Bootcamp-Portfolio" 
                        deployedLink="https://marcelamejiao.github.io/Bootcamp-Portfolio/"
                        image="/assets/images/bootcamp-portfolio.png"
                    />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                    <Project
                        title="Text Editor" 
                        github="https://github.com/marcelamejiao/Text-Editor" 
                        deployedLink="https://salty-cove-60850.herokuapp.com"
                        image="/assets/images/text-editor.png"
                    />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                    <Project
                        title="Weather Dashboard" 
                        github="https://github.com/marcelamejiao/Weather-Dashboard" 
                        deployedLink="https://marcelamejiao.github.io/Weather-Dashboard/"
                        image="/assets/images/weather-dashboard.png"
                    />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                    <Project
                        title="Pawfect Match" 
                        github="https://github.com/marcelamejiao/pawfect-match" 
                        deployedLink="https://pawfect---match.herokuapp.com"
                        image="/assets/images/pawfect-match.png"
                    />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                    <Project
                        title="Umbrella Address Book" 
                        github="https://github.com/marcelamejiao/Umbrella-Address-Book" 
                        deployedLink="https://marcelamejiao.github.io/Umbrella-Address-Book/"
                        image="/assets/images/umbrella-address-book.png"
                    />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                    <Project
                        title="Tech Blog" 
                        github="https://github.com/marcelamejiao/Tech-blog" 
                        deployedLink="https://el-tech-blog-mar.herokuapp.com"
                        image="/assets/images/tech-blog.png"
                    />
                    </div>
                </div>
            </section>
            <Footer /> 
        </div>
    );
}

export default Portfolio;