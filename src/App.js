import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Allposts from './components/MainPage/Allposts'
import Post from './components/Post'

import './App.css';


export default class App extends Component {
  
  render() {
    
    return (
      <div className="App">
      <BrowserRouter>
          {/* <!-- Posts --> */}
          <Route exact path ="/" 
          component= {Allposts} 
        />

        <Route path = "/posts" component = {Post}/>
      </BrowserRouter>
      
              
      </div>
    )
  }
}

