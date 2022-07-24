import React from 'react';
import {useRef} from 'react';
import {useDispatch} from "react-redux";
import {useEffect,useState} from "react";
import {getPopularVideoList,videoListLayout} from './../../../store/video/videoSlice';
import {useNavigate} from 'react-router-dom';
import {searchUrl} from './../../../lib/api'
 import './index.css';
const SearchForm =() => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const inputRef = useRef();
    const onSearch = (input) => {
        const url = searchUrl(input);
        dispatch(getPopularVideoList(url))
        dispatch(videoListLayout('list'))
        navigate('/Search')
    }
    const onSubmit = e => {
        e.preventDefault();
        const input = inputRef.current.value;
        input && onSearch(input);
        inputRef.current.value = '';
    }
       
    return (
     <form className='search' onSubmit={onSubmit}>
        <input
            placeholder='검색'
            type="text"
            className='searchInput'
            ref={inputRef}/>
        <button className='searchBtn'>
            <img 
            src="/images/search.png" 
            alt="search icon" 
            className='searchIcon' />
        </button>
    </form>
    );
};

export default SearchForm;