import React from 'react'
import SidebarContent from './SidebarContent'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const sidebarVisible = useSelector(store => store.app.sidebarOpen);
  if (!sidebarVisible) return null

  return (
    <div className='w-52 mx-3 sticky top-[72px] h-screen'>
      <Link to={'/'}><SidebarContent contentDetails={{ contentName: 'Home', contentLogo: 'https://cdn-icons-png.flaticon.com/512/60/60817.png' }} /></Link>
      <SidebarContent contentDetails={{ contentName: 'Shorts', contentLogo: 'https://cdn.pixabay.com/photo/2021/05/05/12/16/shorts-png-6230962_960_720.png' }} />
      <SidebarContent contentDetails={{ contentName: 'Subscription', contentLogo: 'https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png' }} />
      <hr className='my-4' />
      <SidebarContent contentDetails={{ contentName: 'Library', contentLogo: 'https://cdn.iconscout.com/icon/free/png-256/free-video-library-1781676-1518357.png' }} />
      <SidebarContent contentDetails={{ contentName: 'History', contentLogo: 'https://static.thenounproject.com/png/3389503-200.png' }} />
      <SidebarContent contentDetails={{ contentName: 'Watch Later', contentLogo: 'https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp' }} />
      <SidebarContent contentDetails={{ contentName: 'Liked Videos', contentLogo: 'https://w7.pngwing.com/pngs/976/86/png-transparent-facebook-like-button-youtube-computer-icons-youtube-angle-rectangle-thumb-signal-thumbnail.png' }} />
      <hr className='my-4' />
      <h3 className='font-semibold ml-4'>Explore</h3>
      <SidebarContent contentDetails={{ contentName: 'Trending', contentLogo: 'https://cdn-icons-png.flaticon.com/512/2112/2112959.png' }} />
      <SidebarContent contentDetails={{ contentName: 'Shopping', contentLogo: 'https://www.creativefabrica.com/wp-content/uploads/2020/08/12/Bag-Icon-Graphics-4941627-1.jpg' }} />
      <SidebarContent contentDetails={{ contentName: 'Music', contentLogo: 'https://cdn.icon-icons.com/icons2/3219/PNG/512/youtube_music_social_media_communication_interaction_icon_196641.png' }} />
      <SidebarContent contentDetails={{ contentName: 'Films', contentLogo: 'https://library.kissclipart.com/20180829/qhe/kissclipart-movie-icon-clipart-computer-icons-film-clip-art-3937db1254b3b7d3.jpg' }} />
      <SidebarContent contentDetails={{ contentName: 'Live', contentLogo: 'https://cdn.icon-icons.com/icons2/1713/PNG/512/iconfinder-youtubelivevideowebinarconference-3993869_112660.png' }} />
      <SidebarContent contentDetails={{ contentName: 'Gaming', contentLogo: 'https://cdn.icon-icons.com/icons2/3237/PNG/512/play_social_media_youtube_steaming_gaming_youtube_gaming_icon_197445.png' }} />
      <SidebarContent contentDetails={{ contentName: 'News', contentLogo: 'https://icons-for-free.com/iconfiles/png/512/news+regular-1330515566337522677.png' }} />
      <SidebarContent contentDetails={{ contentName: 'Sport', contentLogo: '' }} />
      <SidebarContent contentDetails={{ contentName: 'Learning', contentLogo: '' }} />
    </div>
  )
}

export default Sidebar