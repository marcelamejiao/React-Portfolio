import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';

function Contact ({currentPage, handlePageChange}) {
    
    let [error, setError] = useState('');

    const validateName = (e) => {
        e.preventDefault();

        const input = e.target;

        if (input.value === '') {
            setError ('Please enter a name');
        } else {
            setError('');
        }
    };

    const validateEmail = (e) => {
        e.preventDefault();

        const input = e.target;

        if (input.value === '' || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
            setError ('Please enter a valid email');
        } else {
            setError('');
        }
    };

    const validateMessage = (e) => {
        e.preventDefault();

        const input = e.target;

        if (input.value === '') {
            setError ('Please enter a message');
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Logic to submit the message
    };

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <section className='container col-md-6'>
                <h1>Contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <label className='col-12' htmlFor="name">Name:</label>
                        <input className='col-12' type="text" id="name" name="name" onBlur={validateName} />
                    </div>
                    <div className='row'>
                        <label className='col-12' htmlFor="email">Email:</label>
                        <input className='col-12' type="text" id="email" name="email" onBlur={validateEmail} />
                    </div>
                    <div className='row'>
                        <label className='col-12' htmlFor="message">Message:</label>
                        <textarea className='col-12' id="message" name="message" rows="4" cols="50" onBlur={validateMessage}></textarea>
                    </div>
                    <div className='row'>
                        {error}
                    </div>
                    <div className='row'>
                        <input className='col-12' type="submit" value="Send" />
                    </div>
                    <div className='row'>
                        <p className='col-12'>Phone number: <a href='tel:+61450207624'>+61450207624</a></p>
                    </div>
                    <div className='row'>
                        <p className='col-12'>
                        Email: <a href='mailto:marcelitamejia_24@hotmail.com'>marcelitamejia_24@hotmail.com</a>
                        </p>
                    </div>
                </form> 
            </section>
            <Footer />
        </div>
    );
}

export default Contact;
