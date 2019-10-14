import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import serializeForm from 'form-serialize'
import uuid from "uuid";
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
 
export default class Post extends Component {
   
    handleSubmit = (evt)=>{
        evt.preventDefault()
        const values = serializeForm(evt.target, { hash  : true} )
        console.log(values)
        // if (this.props.onCreateContact)
        //     this.props.onCreateContact(values)
    }
    
    render() {
        let time  = Math.floor(new Date())
        return (
            <div>
               
                  <Link className="close-create-contact" to= '/' >
                      Close
                  </Link>
                
                    <form onSubmit={this.handleSubmit} className="create-contact-form" >
                        <div  className="create-contact-details">
                            <input
                                type="text" name="title"
                                placeholder="title"
                                />
                                <input
                                type="text" name="body"
                                placeholder="body"
                                />
                                <input
                                type="hidden" name="id"
                                placeholder="Name"
                                value = {uuid.v4()}
                                />
                                <input
                                type="hidden" name="timestamp"
                                placeholder="Name"
                                value = {time.toString()}
                                />
                                 <select >
                                    <option value="react">React</option>
                                    <option value="redux">Redux</option>
                                    <option value="udacity">Udacity</option>
                                </select>
                             <input
                                type="text" name= "author"
                                placeholder="author"
                                               />
                                     
                        
                                <button>Add Post</button>
                        </div>
                    </form>
            </div>
        )
    }
}
