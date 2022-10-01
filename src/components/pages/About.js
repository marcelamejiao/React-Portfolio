import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

function About ({currentPage, handlePageChange}) {
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <section>
                <img src="https://marcelamejiao.github.io/Bootcamp-Portfolio/assets/images/Avatar.jpg" alt="Marcela Avatar" />
                
                <div>
                Determined and productive web developer with a passion for creative solutions.

                Proficient in JavaScript, CSS and HTML.

                I have strong organizational, math, planning and communication skills.

                Dedicated to learn additional technologies and coding languages,

                currently enrolled in a Coding Bootcamp with the University of Sydney.

                I have an excellent familiarity with Microsoft Office and Audio-Visual equipment.

                Looking forward to learning more and expand my skills on Website and Mobile Apps design.
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default About;
