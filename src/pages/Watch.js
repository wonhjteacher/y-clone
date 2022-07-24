import React from 'react';
import VideoView from './../components/VideoView';
import { useSearchParams } from "react-router-dom";
import VideoItem from '../components/VideoItem';
import {useSelector} from "react-redux";

const Watch = () => {
    let [query,setQuery]  = useSearchParams();
    const id=query.get('id')
    const channelId=query.get('channelId')
    const {data} = useSelector((state) => state.video);
    const lte15VideoData =data.filter((item,idx)=>idx<10);
    return (
        <section className='list content'>
            <VideoView id={id} channelId={channelId}/>
            <ul className='watchList VideoRowList'>
            {
              lte15VideoData.map((item , idx) => (
                <VideoItem key={item.snippet.thumbnails.default.url} item={item.snippet} value={item} statistics={item.statistics} />
              )) 
            }
         </ul>
        </section>
    );
};

export default Watch;