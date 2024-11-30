'use client';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

export default function Navbar({
  navLight,
  playBtn,
  bgLight,
  navCenter,
}: {
  navLight: boolean;
  playBtn: boolean;
  bgLight: boolean;
  navCenter: boolean;
}) {
  const [menu, setMenu] = useState<Boolean>(false);
  const [scroll, setScroll] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${
        bgLight ? 'bg-white dark:bg-slate-900 shadow dark:shadow-gray-800' : ''
      } ${scroll ? 'is-sticky' : ''}`}
      id="navbar"
    >
      <div className="container flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="navbar-brand">
          <span
            className={`text-2xl font-bold ${
              navLight ? 'text-[#6D64E8]' : 'text-[#6D64E8] dark:text-[#6D64E8]'
            }`}
          >
            JAGAIN
          </span>
        </Link>

        {/* Navigation Menu */}
        <div
          className={`navigation lg_992:flex ${
            menu ? 'block' : 'hidden'
          } ${navCenter ? 'justify-center' : 'ms-auto'}`}
          id="menu-collapse"
        >
          <ul
            className={`navbar-nav ${
              navLight ? 'nav-light' : ''
            } flex flex-col lg_992:flex-row`}
            id="navbar-navlist"
          >
            <li className="nav-item ms-0">
              <ScrollLink
                className="nav-link cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70} // Adjust this to account for the navbar height
                to="overview"
              >
                Overview
              </ScrollLink>
            </li>
            <li className="nav-item ms-0">
              <ScrollLink
                className="nav-link cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                to="features"
              >
                Features
              </ScrollLink>
            </li>
            <li className="nav-item ms-0">
              <ScrollLink
                className="nav-link cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                to="interactive-prototype"
              >
                Interactive Prototype
              </ScrollLink>
            </li>
            <li className="nav-item ms-0">
              <ScrollLink
                className="nav-link cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                to="video-prototype"
              >
                Video Prototype
              </ScrollLink>
            </li>
            <li className="nav-item ms-0">
              <ScrollLink
                className="nav-link cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                to="about-us"
              >
                About Us
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Toggle Menu for Mobile */}
        <button
          type="button"
          className="collapse-btn inline-flex items-center ms-2 text-slate-900 dark:text-white lg_992:hidden"
          onClick={() => setMenu(!menu)}
        >
          <span className="sr-only">Navigation Menu</span>
          <i className="mdi mdi-menu text-[24px]"></i>
        </button>
      </div>
    </nav>
  );
}
