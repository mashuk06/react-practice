import React from 'react';
import axios from 'axios';
import SearchInput from '../components/SearchInput'
import ImageList from '../components/ImageList'

class App extends React.Component {

    state = { images : [] };

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=25573022-9fe221de38f665c87a72037cd&q=${entry}&image_type=photo`)
        this.setState({ images : response.data.hits })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images = {this.state.images}/>
            </div >
        )
    }
}

export default App
