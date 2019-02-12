import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs'

const GifList = props => { 
  const result = props.data
  let gifs;
  if (result.length > 0)
    gifs = props.data.map((gif,index) => <Gif url={gif.images.fixed_height} key={index}/> )
  else 
    gifs = <NoGifs />
  
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  )
}

export default GifList;
