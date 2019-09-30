import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state = {
    loading: true,
    title: null
  }
}

componentDidMount= async () => {
  const url = 'https://kitsu.io/api/edge/users/142706/library-entries'
  let res = await axios.get(url);
  console.log(res.data.data[0].relationships.anime.links.related)
  const response = await axios.get(res.data.data[0].relationships.anime.links.related)
  console.log(response)
// console.log(res.data.data[0].relationships.anime.links.self)
};


render(){
  return(
    <div></div>
  )
}

}

export default App;
