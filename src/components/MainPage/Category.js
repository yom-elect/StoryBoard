import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {getCategoryPosts} from '../../util/api'
import {Link} from 'react-router-dom'

export default class Category extends React.Component {

  
   state = {
      dropdownOpen: false,
      categories: [],
      catPost: [] 
    }
 

   toggle = ()=> {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    
    });
  }

  componentDidMount() {
    const url = `http://localhost:3001/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'  },
               } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        let pos = JSON.parse(data)
        this.setState({categories:pos.categories})
      });
  }
  
  handleChange = (event) => {
   //let { details, feed } = this.props
    let category =( event.currentTarget.textContent)
    //console.log(details.id)
    
    
    getCategoryPosts(category)
    .then(posts=>{
        this.setState({catPost: posts})         
    })
}
  
  render() {
      let {categories,catPost} = this.state
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
         Category
        </DropdownToggle>
        {categories.map((cat,i)=>(
            <DropdownMenu key={i}>
         <Link to = '/posts'>
            <div onClick={(event)=>this.handleChange(event) } value={cat.name} >
                {cat.name}
            </div>
         </Link> 
        </DropdownMenu>             
        ))}
        
      </ButtonDropdown>
    );
  }
}