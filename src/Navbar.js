import React, { useState, useRef, useEffect } from "react";
import './Navbar.css';

/*import LogoImg from './GK_NEXERGY_4.png'; */

const menuItems = [
  'Start Here',
  'Courses',
  'FAQ',
  'Projects',
  'Join Us',
  'Resources',
  'Contact',
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const indicatorRef = useRef(null);
  const itemRefs = useRef([]);

  const moveIndicator = (index) => {
    const activeItem = itemRefs.current[index];
    const container = containerRef.current;
    const indicator = indicatorRef.current;

    if (!activeItem || !container || !indicator) return;

    const activeRect = activeItem.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const indicatorLeft = activeRect.left - containerRect.left;
    const indicatorWidth = activeRect.width;

    container.style.setProperty('--indicator-left', `${indicatorLeft}px`);
    container.style.setProperty('--indicator-width', `${indicatorWidth}px`);
  };

  useEffect(() => {
    moveIndicator(activeIndex);
    const handleResize = () => moveIndicator(activeIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  return (
    <div className="bg">
     <nav className="navbar">
      <div className="navbar-content">
        <a href="#GK_NEXERGY" className="navbar-logo">
          {/* *** 2. UPDATE THIS IMG TAG *** */}
          {/* We use the imported LogoImg variable inside curly braces. */}
        </a>
        <div className="nav-links-wrapper">
          <ul ref={containerRef} className="nav-center">
            <div ref={indicatorRef} className="nav-indicator"></div>
            {menuItems.map((item, index) => (
              <li
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={index === activeIndex ? 'active' : ''}
                onClick={() => setActiveIndex(index)}
              ><a href={`/${item.replace(/\s+/g, '-')}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};
export default Navbar;
