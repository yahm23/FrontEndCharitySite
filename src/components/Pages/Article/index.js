import React, { Component } from 'react'
import Strapi from "strapi-sdk-javascript/build/main";
// import Article from '../Article'
// import {useLocation} from 'react-router-dom';

// let URL = useLocation();

// const strapi = new Strapi(`http://localhost:1337/`);


export class Article extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //      post: []
    //    }
    //  }
    
    // async componentDidMount() {
    //  try {
    //    const post = await strapi.getEntries('blogs')
    //    this.setState({ post });
    //  } 
    //  catch(err) {
    //   alert(err);
    //  }
    // }
    
    render() {
      return (
            <div>
                <h1>Article Content</h1>
            </div>
        )
    }
}

export default Article
