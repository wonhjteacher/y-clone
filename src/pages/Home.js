import React from 'react';
import VideoList from './../components/VideoList';
import SideMenu from '../components/SideMenu';
import {useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {videoListLayout} from './../store/video/videoSlice';
const Home = () => {
  const {listLayout} = useSelector((state) => state.video);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(videoListLayout('grid'));
    },[])
    return (
        <>
          <SideMenu  /> 
          <section className='main-content'>
           { listLayout && <VideoList display={listLayout} />}
          </section>
        </>
    );
};

export default Home;