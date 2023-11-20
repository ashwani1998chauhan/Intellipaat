import React from "react";
const ContactForm=()=>
{
    return(
        <div style={{textAlign:"center"}}>
            <form>
                <label>Name</label><br/>
                <input type="text"></input><br/>
                <label>Query</label><br/>
                <input type="text"></input><br/>

                <button>Submit</button>
            </form>
        </div>
    );
}
export default ContactForm;