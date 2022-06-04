import { API } from "./Constants/Constants"

const urls={

originals: `discover/tv?api_key=${API}&with_networks=213`,
action :`discover/movie?api_key=${API}&with_genres=28`,
comedy :`discover/movie?api_key=${API}&with_genres=35`,
romance : `discover/movie?api_key=${API}&with_genres=10749`,
horror :`discover/movie?api_key=${API}&with_genres=27`,
topRated : `/movie/top_rated?api_key=${API}&language=en-US`,
documentaries:`/discover/movie?api_key=${API}&with_genres=99`
}

export default urls

