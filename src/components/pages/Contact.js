import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

function Contact ({currentPage, handlePageChange}) {
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <h1>Contact</h1>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" />
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" />
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" cols="50"></textarea>
                <input type="submit" value="Send" />
            </form> 

            <Footer />
        </div>
    );
}

export default Contact;
