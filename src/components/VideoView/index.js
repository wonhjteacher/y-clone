import React from 'react';
import './index.css';
import {useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getChannelInfo} from './../../store/video/videoSlice';
import {channelUrl} from './../../lib/api';

const VideoView = ({id,channelId}) => {
    const dispatch = useDispatch();
    const {channel} = useSelector((state) => state.video);

    useEffect(() => {
        const channelIdInfo= channelUrl(channelId); 
        dispatch(getChannelInfo(channelIdInfo))
      },[channelId, dispatch])
    return (
        <div className='playVideoBox'>
             <div className='iframeBox'>
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${id}&origin=https://youtube-prc2022.netlify.app`}
                    title='youtube video'
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>   
             </iframe>
            </div>
            {
                channel && ( <div className='VideoViewInfo'>
                        <div className='channel-img'>
                        { channel &&  <img src={channel[0].snippet.thumbnails.default.url} alt="" /> }
                        </div>
                        <div className='channel-data'>
                            <h3 className='channel-title'>{channel[0].snippet.title}</h3>
                            <p className='channel-des'>{channel[0].snippet.description}</p>
                        </div>
                    </div>

                )
            }
           
        </div>
    );
};

export default VideoView;