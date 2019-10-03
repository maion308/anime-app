import React, { Component } from 'react'


class Search extends Component {
    
    render(){
        return(
            <div>
                <form>
                    <label></label>
                    <input type="text" placeholder="search..." />
                    <input type="submit" className="src-btn"/>
                </form>
            </div>
        )
    }
}


export default Search