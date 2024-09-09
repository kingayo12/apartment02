import "./Hero.css";
import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa6";
import Img1 from "../../assets/images/banner-shape.png";
import Img2 from "../../assets/images/dotted-bg.png";
import Hero1 from "../../assets/images/hero1.png";
import Video1 from "../../assets/videos/nathanvideo.mp4";
import Snake from "../../assets/images/snake.png";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const popupRef = useRef(null);

  const handlePlayClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      videoRef.current.play();
      setIsPlaying(true);
    }, 0);
  };

  const handleCloseClick = () => {
    videoRef.current.pause();
    setIsPlaying(false);
    setIsVisible(false);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handleCloseClick();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className='hero_section'>
      <img src={Img1} alt='' className='banner-three__shape ' />
      <img src={Img2} alt='' className='banner-three__dotted' />
      <section className='hero_wrapper'>
        <motion.div
          className='hero'
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5 }}
        >
          <p>Nathan&apos;s Bay </p>
          <h1>
            Waterfront Living
            <span className='snakestyle'>
              Redefined
              <img src={Snake} alt='' className='curve-shape' />
            </span>
          </h1>
          <small>
            Experience the beauty of nature and luxury combined. Own a piece of paradise at Nathan’s
            Bay, Lakowe, where every plot comes with breathtaking waterfront views and a foundation
            for your future — for free!
          </small>
          <div className='video_action'>
            <div className='play' onClick={handlePlayClick}>
              <FaPlay className='icona' />
            </div>
            {isVisible && (
              <div className='video-popup'>
                <div className='video-popup-content'>
                  <button className='close-btn' onClick={handleCloseClick}>
                    X
                  </button>
                  <video ref={videoRef} onClick={togglePlayPause} controls disablePictureInPicture>
                    <source src={Video1} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
            <p>click to take a tour</p>
          </div>
        </motion.div>
        <motion.div
          className='hero'
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 2 }}
        >
          <div className='hero_img'>
            <img src={Hero1} alt='' />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
