import './Footer.css';
import { RiYoutubeLine, RiInstagramLine, RiFacebookBoxLine, RiGithubLine, RiTwitterXFill } from "@remixicon/react";

export default function Footer () {
    return (
        <div className="footer">
            <NewsLetter />
            <FooterNav />
            <CopyrightLogos />
        </div>
    )
}

function NewsLetter () {
    return (
        <div className="newsletter">
            <div className="newsletter-text-intro">
                <p className='newsletter-text-intro-title'>Join our newsletter</p>
                <p>We'll send you a nice letter once per week. No spam. </p>
            </div>
            <form className="newsletter-input">
                <input type="text" id="userEmailInput" placeholder="Enter your email" size="30"/>
                <button type="submit">Subscribe </button>
            </form>            
        </div>
    )
}

function FooterNav () {
    return (
        <div className='footer-nav'>
            <div className='footer-nav-about-brand'>
                <h4>StyleNest</h4>
                <p> Craft stuning style journeys that weave more joy into every thread. </p>
            </div>
            
            <nav className='footer-links'>
                <ul>
                    <p>SHOP CATEGORIES</p>
                    <li>Unisex</li>
                    <li>Women</li>
                    <li>Men</li>
                </ul>
                <ul>
                    <p>SHOP COLLECTIONS</p>
                    <li>Latest arrivals </li>
                    <li>Urban Oasis </li>
                    <li>Cozy Comfort </li>
                    <li>Fresh Fusion </li>
                </ul>
            </nav>
        </div>        
    )
}

function CopyrightLogos () {
    const year = new Date().getFullYear();

    return (
        <>
            <div className='footer-copyright-logos'>
                <p>© {year} StyleNest, Inc. All rights reserved. </p>
                <div className='footer-logos'>
                    <RiYoutubeLine />
                    <RiInstagramLine />
                    <RiFacebookBoxLine  />
                    <RiGithubLine />
                    <RiTwitterXFill />
                </div>
            </div>
        </>
    )
}