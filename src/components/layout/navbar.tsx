/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useState } from 'react';
import {  useEffect } from 'react';
import { useRef } from 'react';
import BarlonLogo from "../ui/barlonLogo";
import Link from "next/link";
import "../../styles/layouts/nav.style.css";
import "../../styles/color-plates/color-plate.css"
import Image from "next/image";
import SearchIcon from "../ui/searchicon";
import TransitionLink from "@/utils/TransitionLink";

export default function Navbar(){
    const [linksCount, setLinksCount] = useState<number>(0);
    const menuBar = useRef<HTMLDivElement | null>(null);
    const searchInput = useRef<HTMLDivElement| null>(null);
    const searchInputField = useRef<HTMLInputElement | null>(null);
    const menuButton = useRef<HTMLDivElement | null>(null);
    const searchButton = useRef<HTMLDivElement | null>(null);
    const searchCancleBtn = useRef<HTMLParagraphElement | null>(null);

    // Handling Menu Button Request
    function handleMenuRequest(){
        setTimeout(() => {
            if (menuButton.current?.classList.contains("disable-button"))
                menuButton.current?.classList.toggle("disable-button");
        }, 500);
        menuButton.current?.classList.toggle("disable-button");
        if (searchInput.current?.classList.contains("search-input-appear"))
            handleSearchRequest();
        menuBar.current?.classList.toggle("menu-appear-func");
        if (linksCount !== undefined) {
            const children = menuBar.current?.children;
        if (children !== undefined)
            for (let i = 0; i < children.length; i++) {
                const changeTarget = children?.[i] as HTMLElement;
                changeTarget.classList.toggle("menu-link-appear");
            }
        }
    };

    // Handling Search Button Request
    function handleSearchRequest(){
        setTimeout(() => {
            if (searchButton.current?.classList.contains("disable-button"))
                searchButton.current?.classList.toggle("disable-button");
        }, 500);
        searchButton.current?.classList.toggle("disable-button");
        if (menuBar.current?.classList.contains("menu-appear-func"))
            handleMenuRequest();
        searchInput.current?.classList.toggle("search-input-appear");
        searchInputField.current?.classList.toggle("search-input-field-active");
        searchCancleBtn.current?.classList.toggle("enable-search-btn")
    };

    // Handling Resize Event for SearchBox
    const onResizing = () => {
        if (searchInput.current?.classList.contains("search-input-appear")) {
          handleSearchRequest();
        }
    };

    useEffect(() => {
        window.addEventListener("resize", onResizing);
      
        return () => {
          window.removeEventListener("resize", onResizing); 
        };
    }, []);

    // Handling Resize Event for MenuBar 
    useEffect(() => {
        setLinksCount(menuBar.current?.children.length || 0)
        const onResize = () => {
          if (menuBar.current?.classList.contains("menu-appear-func")) {
            handleMenuRequest();
          }
        };
        
        window.addEventListener("resize", onResize);
        return () => {
          window.removeEventListener("resize", onResize);
        };
    }, []);

    // Handling Scroll Event for Navigation
    const navToggleOnScroll = () => {
        if (menuBar.current?.classList.contains("menu-appear-func") && window.innerHeight<480)
            handleMenuRequest();
    };

    useEffect(() => {
        
        window.addEventListener("scroll", navToggleOnScroll);

        return () => {
            window.removeEventListener("scroll", navToggleOnScroll)
        };

    }, [])

    // Handling Toggle on Menu Clicks
    const navClickToggle = () => {
        if (menuBar.current?.classList.contains("menu-appear-func"))
            handleMenuRequest();
    }

    return(
        <nav className="nav-bg" >
            <div className="menu-links" ref={menuBar}>
                <TransitionLink className="menu-link-select" onClick={navClickToggle} href={"/"}>Home</TransitionLink>
                <TransitionLink className="menu-link-select" onClick={navClickToggle} href={"/shop"}>Shop</TransitionLink>
                <TransitionLink className="menu-link-select" onClick={navClickToggle} href={"/about"}>About</TransitionLink>
                <TransitionLink className="menu-link-select" onClick={navClickToggle} href={"/contact"}>Contact</TransitionLink>
                <TransitionLink className="menu-link-select" onClick={navClickToggle} href={"/Setting"}>Profile</TransitionLink>
            </div>
            <div className='search-input' ref={searchInput}>
                <input min={1} className='search-input-field' ref={searchInputField} placeholder='Search Here...'/>
                <p className='search-cancle-btn' ref={searchCancleBtn} onClick={handleSearchRequest}>X</p>
            </div>
            <div className="nav-items">
                <Link className="barlon-logo" title="Barlon" href={"/"}>
                    <BarlonLogo className="barlon-logo-svg" />
                </Link>
                <div className="nav-links">
                    <TransitionLink className="nav-link-element" href={"/"}>Home</TransitionLink>
                    <TransitionLink className="nav-link-element" href={"/shop"}>Shop</TransitionLink>
                    <TransitionLink className="nav-link-element" href={"/about"}>About</TransitionLink>
                    <TransitionLink className="nav-link-element" href={"/contact"}>Contact</TransitionLink>
                </div>
                <div className="nav-right-side">
                    <div className="menu-icon" title="Menu" ref={menuButton} onClick={handleMenuRequest}>
                        <p>☰</p>
                    </div>
                    <div className="search-icon" title='Search' ref={searchButton} onClick={handleSearchRequest}>
                        <SearchIcon className="search-bar-svg" />
                    </div>
                    <div className="profile-logo-box" title='Setting' >
                        <Image 
                            src={"/profile-logo.png"}
                            alt="Profile"
                            height={40}
                            width={40}
                        />
                    </div>
                </div>
            </div>
        </nav>    
    );
}