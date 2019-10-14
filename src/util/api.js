export const  getCategoryPosts = (cat)=> {

    console.log(cat)
    return fetch(`http://localhost:3001/${cat}/posts`,{ headers: { Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'  }})
      .then((res) => res.json())
      .then((posts ) =>  
                  posts.map((post) => post)
)}