import React, { Component } from 'react';
import axios from 'axios';


class Browse extends Component {
    constructor(props){
        super(props);
        console.log("PROPS!:", props);
        this.state = {
            categories: []
        }
    }

    componentDidMount = async () => {
        const categories_url = 'https://kitsu.io/api/edge/categories?page[limit]=300&page[offset]=0'
        try {
            const res = await axios.get(categories_url);
            // console.log("Categories Data:", res.data.data[0].attributes.title)
            const result = res.data.data.map(item => item.attributes.title)
            this.setState({
                categories: result
            })
        }
        catch(err) {

            console.log(err)
        }
        
    }

    render(){
         const {categories} = this.state;
        return(
            <div>
                <select onChange={this.props.onGenreChange}>
                    <option>select a category</option>
                    {categories.map(item => (
                        <option value={item}>{item}</option>
                    ) )}
                </select>
            </div>
        )
    }
}



export default Browse