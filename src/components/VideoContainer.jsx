import React from 'react'
// import VideoCard from './VideoCard';
import { formatNumber } from '../helper/formatChange.helper';



const VideoContainer = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet

  
  return (
    <div className="w-96 p-2 mt-2 cursor-pointer" >
      <img className="w-full h-52 object-cover rounded-2xl" src={thumbnails.high.url} alt="" srcset="" />
      <div className="flex">
        <img src="" alt="" srcset="" />
        <div>
          <ul>
            <li className='font-medium text-base'>{title}</li>
            <li className='text-sm'>{channelTitle}</li>
            <li className='text-sm'>{formatNumber(statistics.viewCount)} views </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VideoContainer