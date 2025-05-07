"use client"

import "../../styles/layouts/footer.style.css";
import "../../styles/color-plates/color-plate.css"
import FooterLocationMark from "../ui/footer-location";
import TelephoneSvg from "../ui/telephone";
import Link from "next/link";
import EmailSvg from "../ui/emailsvg";
import { useRef } from "react";

export default function Footer(){

    const footerUsefulLinksOpen = useRef<HTMLDivElement | null>(null);
    const footerSocialBoxOpen = useRef<HTMLDivElement | null>(null);

    const togglingFooterLinks = () => {
        footerUsefulLinksOpen.current?.classList.toggle("footer-useful-links-container-active");
    }

    const togglingFooterSocialBox = () => {
        footerSocialBoxOpen.current?.classList.toggle("footer-social-box-container-active");
    }
    
    return(
        <footer className="footer-component">
            <div className="footer-body">
                <div className="footer-content">
                    <div className="footer-social-box">
                        <div className="footer-address-box-header"><p>Get in Touch</p><span onClick={togglingFooterSocialBox} className="footer-link-open-button">+</span></div>
                        <address className="footer-contact-box" ref={footerSocialBoxOpen}>
                            <div className="footer-contact-info"><div><FooterLocationMark /></div><p>123 Main Street, City, Country</p></div>
                            <div className="footer-contact-info"><div><EmailSvg /></div><a href="mailto:info@example.com">info@example.com</a></div>
                            <div className="footer-contact-info"><div><TelephoneSvg /></div><a href="tel:+12345678901">+1 (234) 567-8901</a></div>
                        </address>
                    </div>
                    <div className="footer-useful-links">
                        <div className="footer-useful-links-header">
                            <p>Useful Links</p><span className="footer-link-open-button" onClick={togglingFooterLinks}>+</span>
                        </div>
                        <div className="footer-useful-links-container" ref={footerUsefulLinksOpen}>
                            <div><Link className="footer-useful-link-element" href={"/"}>Return & Exchange Policy</Link></div>
                            <div><Link className="footer-useful-link-element" href={"/"}>Shipping Details</Link></div>
                            <div><Link className="footer-useful-link-element" href={"/"}>FAQs</Link></div>
                            <div><Link className="footer-useful-link-element" href={"/"}>Return & Exchange Policy</Link></div>
                            <div><Link className="footer-useful-link-element" href={"/"}>Terms of service</Link></div>
                            <div><Link className="footer-useful-link-element" href={"/"}>Refund policy</Link></div>
                        </div>
                    </div>
                    <div className="news-box">
                        <div className="news-letter-box">
                            <div className="subscribe-text"><p>Subscribe our News Letter</p></div>
                            <div className="subscribe-email-box"><input type="email" className="subscribe-email-input" placeholder="Your Email"/></div>
                        </div>
                        <Link className="footer-news-link" href={"/"}>Go to News</Link>
                    </div>
                </div>
            </div>
            <div className="copyright-banner">
            <p>Copyright &copy; 2025 Barlon Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}