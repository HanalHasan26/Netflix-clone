import React, { useEffect,useState } from 'react'
import './Banner.css'
import axios from '../../Axios/Axios'
import { API, imageUrl } from '../../Constants/Constants'
function Banner() {
  const [Movie, setMovie] = useState()


useEffect(() => {
    axios.get(`trending/all/day?api_key=${API}`).then((response)=>{
      setMovie(response.data.results.sort((a,b)=>{
        {return 0.5 - Math.random()}
      })[0])
    })
},[])


  return (

    <div
    style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path :''})`}}

     className='banner'>
        <div className="content">
            <h1 className='title'>{Movie ? Movie.title:''}</h1>
            <div className="banner_buttons">
                <button className='buttons'>Play</button>
                <button className='buttons'>My list</button>
            </div>
            <h1 className="description">
                {Movie ? Movie.overview:''}
            </h1>
        </div>
        <div className="fade"></div>
        
    </div>

  )
}

export default Banner