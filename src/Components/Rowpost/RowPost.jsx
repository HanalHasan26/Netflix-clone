import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../Axios/Axios'
import {  API, imageUrl } from '../../Constants/Constants'
function RowPost({title,isSmall,url}) {
const [movie, setMovie] = useState([])
const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(url).then((response)=>{
      setMovie(response.data.results)
    })
},[])

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0,
  },
};

const handleClicked = (id)=>{
  axios.get(`/movie/${id}/videos?api_key=${API}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
  })
}

  return (
    <div className='row'>
        <h2 className="title">{title}</h2>
        <div className="posters">
            {movie.map((obj)=>
            <img onClick={()=>{
              handleClicked(obj.id)
            }} className={isSmall ? 'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster"/>
            )}
        </div>
        {urlId &&<Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost