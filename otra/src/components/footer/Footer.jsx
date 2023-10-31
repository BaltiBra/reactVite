import React from "react";
import "./footer1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} YourCompany. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href=""
                    target="_blank"
                    className="item3" rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href=""
                    target="_blank"
                    className="item4" rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="item5" rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>

                
            </div>
        </footer>
    );
};

export default Footer;