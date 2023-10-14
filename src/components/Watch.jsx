import React from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeSidebar } from '../utils/appSlice';
import WatchDetails from './WatchDetails';

const Watch = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    
    const dispatch = useDispatch();
    dispatch(closeSidebar())

    return (
        <div className='pt-3 pl-20'>
            <iframe
                className='rounded-xl'
                id="ytplayer"
                width="850"
                height="480"
                src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
                title="YouTube video player"
                rameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            <WatchDetails videoId={videoId} />
        </div>
    )
}

export default Watch