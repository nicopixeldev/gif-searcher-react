import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
import SearchForm from './Components/SearchForm'
import GifList from './Components/GifList'

const { REACT_APP_API_KEY_GIPHY } = process.env;

export default class App extends Component {
  
  state = { gifs: [], loading: true }

// ** with axios **

// ComponentDidMount is called immediately 
// after a component is added to the DOM.
  // componentDidMount() {
  //   axios.get('https://api.giphy.com/v1/gifs/trending?api_key=${REACT_APP_API_KEY_GIPHY}')
  //     .then(res => this.setState({ gifs: res.data.data })) // axios respond directly with json()
  //     .catch( err => console.log('Error fetching gifs', err) )
  // }

  // ** With fetch  **

  // componentDidMount() {
  //   fetch('https://api.giphy.com/v1/gifs/trending?api_key=${REACT_APP_API_KEY_GIPHY}')
  //     .then(res => res.json())
  //     .then(resData => {
  //       this.setState({ gifs: resData.data })
  //     })
  //     .catch(err => {
  //       console.log('Error fetching and parsing the data', err)
  //     })
  // }

  componentDidMount() { // default value when the page loads
    this.performSearch()
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=${REACT_APP_API_KEY_GIPHY}`)
      .then(res => this.setState({ gifs: res.data.data, loading: false}))
      .catch( err => console.log('Error fetching gifs', err) )
  } 

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />  
          </div>   
        </div>    
        <div className="main-content">
            {
              (this.state.loading)
              ? <p>Loading...</p>
              : <GifList data={this.state.gifs}/>
            }
        </div>
      </div>
    )
  }
}
