import React from 'react';
import { motion } from 'framer-motion';

// import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
<>


  
  <div className="app__header app__flex">
  <motion.div 
      
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
      className="app__header-intro">
        <motion.h2
        initial={{x:'-100vw'}}
        animate={{x:0}}> I am </motion.h2>
        <motion.h3 animate={{fontSize:50,color:'#ff2994'}}>Hassan Abdihakin</motion.h3>
        <motion.p initial={{x:'-100vw'}}
        animate={{x:0}}>Contemplative coder and analyst. Inspired by tough problems.</motion.p>
        <motion.button 
        transition={{duration:0.5}}
        initial={{x:'-100vw'}}
        animate={{x:0}}
        
        className='button'>My projects</motion.button>
      </motion.div>
    

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.tu} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.r, images.python, images.sequel].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
  </>
  
);

export default Header