import React from 'react';

function Footer () {
    return (
        <div className='d-flex justify-content-around my-5'>
            <section className="content col-12 col-sm-8 d-flex justify-content-around flex-row">            
                <a href="https://github.com/marcelamejiao" target="_blank" rel="noreferrer" className="fa fa-github"> Github</a>

                <a href="https://www.linkedin.com/in/wendy-marcela-mejía-ortiz-80b10a157/" target="_blank" rel="noreferrer" className="fa fa-linkedin"> Linkedin</a>
            
                <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer" className="fa fa-twitter"> Twitter</a>
            </section>
        </div>
    );
}
export default Footer;
