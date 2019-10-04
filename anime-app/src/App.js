import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Browse from './components/Browse'
import Search from './components/Search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      filteredData: [],
      search: [],
      myAnime: [],
    }
  }

  componentDidMount = async () => {
    try {
      const url = 'https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0';
      let res = await axios.get(url);
      let list = res.data.data
      const data = list.map(item => {
        return { 
          title: item.attributes.canonicalTitle,
          image: item.attributes.posterImage.medium,
          synopsis: item.attributes.synopsis
        };
      });
      this.setState({
        filteredData: data,
        isLoading: false,
      })
    } catch (error) {
      console.error(error);
    }
  }


  handleGenre = async (e) => {
    try {
      this.setState({ isLoading: true });
      const url = `https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0&filter[genres]=${e.target.value}`;
      let res = await axios.get(url);
      let list = res.data.data
      const data = list.map(item => {
        return { 
          title: item.attributes.canonicalTitle,
          image: item.attributes.posterImage.medium,
          synopsis: item.attributes.synopsis,
          
        };
      });
      this.setState({
        filteredData: data,
        isLoading: false,
      })
      
    } catch (error) {
      console.error(error);
    }
  }
  

  handleSearch = async (search) => {
    try {
      this.setState({ isLoading: true });
      const url = `https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0&filter[text]=${search}`;
      let res = await axios.get(url);
      let list = res.data.data
      const data = list.map(item => {
        return { 
          title: item.attributes.canonicalTitle,
          image: item.attributes.posterImage.medium,
          synopsis: item.attributes.synopsis,
          
        };
      });
      this.setState({
        filteredData: data,
        isLoading: false,
      })
      
    } catch (error) {
      console.error(error);
    }
  }

  render() {
const {filteredData, isLoading} = this.state
    return (
      <div className="flex-container">
      <Header />
        <Switch>
          <Route exact path = "/browse" render = {() => <Browse onGenreChange={this.handleGenre}/>} />
          <Route exact path = "/search" render = {() => <Search handleSearch={this.handleSearch}/>} />
        </Switch>
    
    <div className="main-container">
      { 
        isLoading
          ? <span>I'm loading...</span>
          : filteredData.map((item, index) => (
            <div key={item.image}>
              <h3>Title: {item.title}</h3>
              <img src={item.image} alt="manga" />
              <p className="my-para">Synopsis: {item.synopsis}</p>
            </div>
          ))}
    </div>
    </div>
    )
  }
}

export default () => (
  <Router><App/></Router>
)


