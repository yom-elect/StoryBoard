import React, { Component } from 'react'
import Paginate from './Pagination'
import Footer from './Footer'
import Navbar from './Navbar'

export default class Allposts extends Component {

    state= {
        allPost: [{title:"yomi",body:"",author:"",}]
      }
      
      componentDidMount() {
        const url = `http://localhost:3001/posts`;
        console.log('fetching from url', url);
        fetch(url, { headers: { Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'  },
                   } )
          .then( (res) => { return(res.text()) })
          .then((data) => {
            let pos = JSON.parse(data)
            //console.log(pos)
            this.setState({allPost:pos});
            
          });
      }
    
    render() {
        let {allPost} = this.state
        let month = new Date().getMonth()
        let year = new Date().getFullYear()

        return (
            <div className="App">
                <Navbar>
                    
                </Navbar>
{/* <!-- Main --> */}

  
             {allPost.map((post,i)=>(
                      <article className="post" key={i}>
                      <header>
                        <div className="title">
                          {/* <h2><a href="single.html">Magna sed adipiscing</a></h2> */}
                          <p>{post.title}</p>
                        </div>
                        <div className="meta">
                          <time className="published" dateTime="2015-11-01">{month.toString()}, {year.toString()}</time>
                          <a href="#" className="author"><span className="name">{post.author}</span><img src="images/avatar.jpg" alt="" /></a>
                        </div>
                      </header>
                      <a href="single.html" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
                      <p>{post.body}</p>
                      <footer>
                        <ul className="actions">
                          <li><a href="single.html" className="button large">Continue Reading</a></li>
                        </ul>
                        <ul className="stats">
                          <li><a href="#">General</a></li>
                          <li><a href="#" className="icon solid fa-heart">{}</a></li>
                          <li><a href="#" className="icon solid fa-comment">{}</a></li>
                        </ul>
                      </footer>                    
                  	</article>                
                ))}
									<div id="main">
              
    
    <Paginate/>      {/* <!-- Pagination --> */}
  </div>
    <Footer/>        {/* <!-- Footer --> */}	
            </div>
        )
    }
}
