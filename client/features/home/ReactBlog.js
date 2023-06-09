import React, { useState, useEffect } from 'react';
import { useSelector, } from 'react-redux';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Link, useNavigate } from 'react-router-dom';


/**
 * COMPONENT
 */
const NewHome = (props) => {
  const [scrollCount, setScrollCount] = useState(1);
  const [increment, setincrement] = useState(5);
  const [indexCount, setIndexCount] = useState(0);
  const [visibility, setVisibility] = useState('visible text-9xl ');
  const [background, setBackground] = useState('');
  const [cssVis, setcssVis] = useState('text-7xl fixed invisible');
  const threshold = 10; // Set the threshold for scroll count
  const navigate = useNavigate ();
  
  let textlist =[ 
  'keep scrolling', 
  'keep scrolling',
  'keep on scrolling',
  'keep on scrolling...',
  'Just a little more',
  'Just a little more...',
  'CSS',
  'CSS...',
  'Is considered to be...',
  ' A Dark Art ...',
  'Very Dark',
  'Very Dark ...',
  'Very Very Dark',
  'Very Very Dark ...',
   'And Javascript',
   'And Javascript...',
   'And Javascript...',
   'Is a Chaotic Mess',
   'Is a Chaotic Mess...',
  'But Sometimes We Need',
  'But Sometimes We Need...',
  'Sites that can just',
  'Sites that can just...',
  'React',
  'React...',
  'REACT!'
  ]
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      
      if (scrollTop > lastScrollTop) {
        setScrollCount(prevCount => prevCount + .2);
      }
      if (scrollTop < lastScrollTop) {
        setScrollCount(prevCount => prevCount - .2);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  let lastScrollTop = 0;

  useEffect(() => {
    if (scrollCount > increment) {
      setIndexCount(prevCount => prevCount + 1)
      setincrement(prevCount => prevCount + 5)
      setcssVis('text-7xl fixed visible')
      
      
    }
  }, [scrollCount]);

  useEffect(() => {
    if (increment - scrollCount > 7) {
      setIndexCount(prevCount => prevCount - 1)
      setincrement(prevCount => prevCount - 4)
      setcssVis('text-7xl fixed visible')
      
    }
  }, [scrollCount]);

  useEffect(() => {
    if (indexCount > 25) {
      navigate('/second');
      window.location.reload();
      setIndexCount(25)
    }
    if (indexCount > 13)  {
      setBackground('visible fixed top-0 left-0 bg-black h-screen w-screen transition delay-150 duration-300 ease-in-out ...')
      setVisibility('invisible')
    }
    if (indexCount > 15)  {
      setBackground('')
    }
  }, [scrollCount]);


let csseffects = 'text-7xl fixed visible'
  return (
    <div className={background}>
      <br />
      {/* <h1>Scroll Count: {scrollCount}</h1> */}
      <h1 className={visibility}>WebDesign</h1>
      <h1 className={cssVis}>{textlist[indexCount]}</h1>
      <div className=" justify-center flex wrap animate-custom ">
        <svg className="pt-custom ..."><ArrowCircleDownIcon /></svg>
        {/* <svg className={cssVis}><ArrowCircleDownIcon /></svg> */}
      </div>
    </div>
  );
};

export default NewHome;
