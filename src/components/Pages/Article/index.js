import React, { Component } from 'react'
import Strapi from "strapi-sdk-javascript/build/main";
// import Article from '../Article'
// import {useLocation} from 'react-router-dom';

// let URL = useLocation();

// const strapi = new Strapi(`http://localhost:1337/`);


export class Article extends Component {


    
    render() {
      return (
            <div>
                <h1>Article Content</h1>
            </div>
        )
    }
}

export default Article
