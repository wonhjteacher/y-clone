import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import {dateConverter,countConverter} from './../../lib/common';

const VideoItem = ({item,value}) => {
    const navigate=useNavigate();
    const goToWatch = () => {
        let id;
        if(typeof value.id === 'string'){
            id=value.id
        }else if(typeof value.id === 'object'){
            id=value.id.videoId;
        }
        navigate(`/watch?id=${id}&channelId=${item.channelId}`)
    }
 
    return (
        <li className='videoItem videoItemGrid' onClick={goToWatch}>
           <img src={item.thumbnails.medium.url}  alt='thumbnail' className='thumbnail-img' />
           <div className='descriptionBox'>
            <div className='description'>
                <h2 className='videoTitle'>{item.title}</h2>
                <h3 className='channelTitle'>{item.channelTitle}</h3>
                <p className='date'>{dateConverter(item.publishedAt)}</p>
               {/*  <p className='videoInfo'>
                  <span className='viewCount'>{countConverter(statistics.viewCount)}회 • </span>
                  <span className='date'>{dateConverter(item.publishedAt)}</span>
                </p> */}
            </div>
           </div>
        </li>
    );
};

export default VideoItem;