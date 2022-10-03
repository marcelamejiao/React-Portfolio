import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

function Resume ({currentPage, handlePageChange}) {
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <section className='container'>
                <h1>Resume</h1>

                <p>Download my <a href="/resume.docx" download>resume</a></p>

                <ul>
                    <li>React.js</li>
                    <li>Object-Oriented Programming (OOP)</li>
                    <li>MongoDB</li>
                    <li>Mongoose ODM</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>MySQLs</li>
                    <li>Sequelize</li>
                    <li>JavaScript</li>
                    <li>Cascading Style Sheets (CSS)</li>
                    <li>jQuery</li>
                    <li>HTML5</li>
                    <li>Bootstrap</li>
                    <li>Moment.js</li>
                    <li>GitHub</li>
                </ul>
            </section>
            <Footer />
        </div>
    );
}

export default Resume;
