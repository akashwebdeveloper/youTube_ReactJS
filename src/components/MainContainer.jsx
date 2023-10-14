import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { YOU_TUBE_POPULAR_VIDEO } from '../utils/constants'
import { Link } from 'react-router-dom'

const MainContainer = () => {
  const [youtubeData, setYoutubeData] = useState([]);


  const getVideo = async () => {
    const apiData = await fetch(YOU_TUBE_POPULAR_VIDEO)
    const jsonData = await apiData.json();
    setYoutubeData(jsonData.items);
  }

  useEffect(() => {
    return () => getVideo();
  }, [])


  return (
    <div className='mx-6 text-base'>
      <ButtonList />
      <div className='flex flex-wrap mt-5'>
        {youtubeData.length === 0 ? (
          <p>Loading...</p> // Display a loading message or spinner
        ) : (
          youtubeData.map((videoInfo) => (
            <Link to={'/watch?v=' + videoInfo.id} key={videoInfo.id}><VideoContainer key={videoInfo.id} info={videoInfo} /></Link>
          ))
        )}
      </div>
    </div>
  )
}

export default MainContainer