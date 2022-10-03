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

    return (
        <div className="container">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <h1>Contact</h1>
            <form>
                <p>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onBlur={validateName} />
                </p>
                <p>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" onBlur={validateEmail} />
                </p>
                <p>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" cols="50" onBlur={validateMessage}></textarea>
                </p>
                <p>
                    {error}
                </p>
                <p>
                    <input type="submit" value="Send" />
                </p>
                <p>
                    Phone number: <a href='tel:+61450207624'>+61450207624</a>
                </p>
                <p>
                    Email: <a href='mailto:marcelitamejia_24@hotmail.com'>marcelitamejia_24@hotmail.com</a>
                </p>
            </form> 

            <Footer />
        </div>
    );
}

export default Contact;
