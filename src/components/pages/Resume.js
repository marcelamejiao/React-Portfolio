import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

function Resume ({currentPage, handlePageChange}) {
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <section className='container'>
                <h1>Resume</h1>

                <p>Click to Download my <a href="/resume.docx" download>RESUME</a></p>

                <h3>My proficiencies</h3>
                <ul className='resume-list'>
                    <li>GitHub</li>
                </ul>
                <h4>Front End</h4>
                <ul className='resume-list'>
                    <li>React.js</li>
                    <li>Cascading Style Sheets (CSS)</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Moment.js</li>
                    <li>HTML5</li>
                </ul>
                <h4>Back End</h4>
                <ul className='resume-list'>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQLs</li>
                    <li>Sequelize</li>
                    <li>Object-Oriented Programming (OOP)</li>
                    <li>MongoDB</li>
                    <li>Mongoose ODM</li>
                    <li>GraphQL</li>
                    <li>RESTful API</li>
                </ul>
            </section>
            <Footer />
        </div>
    );
}

export default Resume;
