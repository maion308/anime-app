import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Browse from './components/Browse'

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
/*
  const arr = [{ val: 7 }, { val: 9}, { val: 12 }]

  arr.map(item => item.val)
*/

  componentDidMount = async () => {
    try {
      const url = 'https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0';
      // filter[genres]=adventure
      let res = await axios.get(url);
      // console.log(res.headers)
      // console.log(res.data.data[0].relationships.anime.links.related)
      let list = res.data.data
      console.log(list)

      const data = list.map(item => {
        return { 
          title: item.attributes.canonicalTitle,
          image: item.attributes.posterImage.medium,
          // link: 
        };
      });
      // data = [{ title: myTitle, image: /.fdfnjnf/.. }]
      this.setState({
        filteredData: data,
        isLoading: false,
      })
      
      // list.map(item => 
      //   // console.log(item.attributes.canonicalTitle)
      //   this.setState({
      //     category: [...item.attributes.canonicalTitle]
      //   })
      //   )

    } catch (error) {
      console.error(error);
    }
  }

  // getFilteredData(genre) {
  //   try {
  //     const url = `https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0&filter[genres]=${genre}`
  //     let res = await axios.get(url);
  //     // console.log(res.headers)
  //     // console.log(res.data.data[0].relationships.anime.links.related)
  //     let list = res.data.data
  //     console.log(list)

  //     const data = list.map(item => {
  //       return { 
  //         title: item.attributes.canonicalTitle,
  //         image: item.attributes.posterImage.medium,
  //       };
  //     });
  //     // data = [{ title: myTitle, image: /.fdfnjnf/.. }]
  //     this.setState({
  //       category: data
  //     })
      
  //     // list.map(item => 
  //     //   // console.log(item.attributes.canonicalTitle)
  //     //   this.setState({
  //     //     category: [...item.attributes.canonicalTitle]
  //     //   })
  //     //   )

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  handleGenre = async (e) => {
    try {
      this.setState({ isLoading: true });
      const url = `https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0&filter[genres]=${e.target.value}`;
      // filter[genres]=adventure
      let res = await axios.get(url);

      let list = res.data.data
      console.log(list)

      const data = list.map(item => {
        return { 
          title: item.attributes.canonicalTitle,
          image: item.attributes.posterImage.medium,
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
console.log("filteredData: ", filteredData);
    return (
      <div>
        <Browse onGenreChange={this.handleGenre} />
    <p>
      { 
        isLoading
          ? <p>I'm loading...</p>
          : filteredData.map((item, index) => (
            <React.Fragment key={item.image}>
              <span>{item.title}</span>
              <img src={item.image} alt="manga" />
            </React.Fragment>
          ))}
    </p>

      </div>
    )
  }

}

export default App;

// App.js (in mapFn)
/**
 * <MyCardComponent card={item} key={}/>
 */

 // handleGenre = (e) => this.setState({ genre: e.target.value });
 // handleSearch = (value) => this.setState({ searchValue: value });
 /* 
   
 componentDidUpdate(prevProps, prevState) {
   let url = 'basic url';
   if (genre) url = `${url}&filter[genres]=${genre}`;
   if (search) url = `${url}&filter[text]=${search}`

   let res = await axios.get(url);

      let list = res.data.data
      console.log(list)

      const data = list.map(item => {
        return { 
          title: item.attributes.canonicalTitle,
          image: item.attributes.posterImage.medium,
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

 */

 // New component
/**
function MyCardComponent(props) {
   const { card } = props;
  return (
    <button onClick={() => window.location.href(card.link)}> // history.push(url)
      <span>{card.title}</span>
      <img src={card.image} alt="manga" />
    </button>
  )
 }

 export default MyCardComponent;
 */