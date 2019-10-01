import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Search from './components/Search.js'
import Browse from './components/Browse'

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    isLoaded: false,
    title: []
  }
}

// componentDidMount() {
//   const url = 'https://kitsu.io/api/edge/users/142706/library-entries'
//   fetch(url)
//   .then(res => res.json())
//   .then(json => {
//     this.setState({
//       isLoaded: true,
//       title: json
//     })
//   })
// }


componentDidMount= async () => {
  const url = 'https://kitsu.io/api/edge/users/142706/library-entries'
  let res = await axios.get(url);
  console.log(res.data.data[0].relationships.anime.links.related)
  const response = await axios.get(res.data.data[0].relationships.anime.links.related)
  const result = response.data.data
  console.log(result.attributes)

  
  // console.log(response.data.data)
// console.log(res.data.data[0].relationships.anime.links.self)
};




render(){
  
  return(
    <div>
    <Search/>
    <Browse />
    
    </div>
  )
}

}

export default App;
