import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

function About ({currentPage, handlePageChange}) {
    return (
        <div className='about-page'>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <section className='container'>
                <h1>About me</h1>
                
                <article className='row d-flex align-items-start justify-content-center'>
                    <img 
                        className='col-8 col-sm-3 mb-2 mb-sm-0'
                        src="https://marcelamejiao.github.io/Bootcamp-Portfolio/assets/images/Avatar.jpg" 
                        alt="Marcela Avatar" 
                    />

                    
                    <p className='col-12 col-sm-9 pt-4'>
                        <strong className='about-welcome mb-5'>Hi! I am Marcela, welcome to my coding world!</strong><br /><br />

                        Determined and productive Full Stack Web Developer with a passion for creative solutions.
                        I have strong organizational, math, planning and communication skills.
                        Dedicated to learn additional technologies and coding languages.
                        I have an excellent familiarity with Microsoft Office and Audio-Visual equipment.
                        Looking forward to learning more and expand my skills on Website and Mobile Apps design.
                    </p>
                </article>
            </section>
            <Footer />
        </div>
    );
}

export default About;
