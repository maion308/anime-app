import React, { Component } from 'react';
import axios from 'axios';


class Search extends Component {
    constructor(props){
        super(props);
        console.log("PROPS!:", props);
        this.state = {
            search: '',
        }
    }

    componentDidMount = async () => {

        const search_url = 'https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0'
        try {
            const res = await axios.get(search_url);
            console.log(res)
        }
        catch(err) {

            console.log(err)
        }
           
    }

    handleChange = (e) => {
        this.setState({search: e.target.value});
      }

    render(){
         const {search} = this.state;
         const {handleSearch } = this.props
        return(
            <div>
                <input id="search-box" type="text" onChange={this.handleChange} value={search}/>
                <button id="btn" type="button" onClick={()=>handleSearch(search)}>search</button>
            </div>
        )
    }
}


export default Search