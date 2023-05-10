import React from 'react';

function Contact() {
    return (<div><div className='portfolioName'>Leave a Message!</div>
    <div className='contact'>
    <form>
    <label htmlFor="name">name</label>
    <input style={{margin:"1vw"}} type="text" id='name'></input>
    <label htmlFor='email'>email</label>
    <input style={{margin:"1vw"}} type="email" id='email'></input>
    <label htmlFor='message'>message</label>
    <textarea style={{margin:"1vw"}} type id='message' rows="8"></textarea>
    <button type="submit">Submit</button>
    </form>
    </div>
    </div>

    )
    
    
}
export default Contact;