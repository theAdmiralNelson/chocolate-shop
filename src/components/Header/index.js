import React from "react"
import { Link } from "gatsby"
import styles from "./styles"

const Header = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <header className={`site-head ${toggleNav ? `site-head-open` : ``}`}>
      <div className="site-head-container-home" id="nav">
        <a
          className="nav-burger"
          href={`#`}
          onClick={() => setToggleNav(!toggleNav)}
        >
          <div
            className="hamburger hamburger--collapse"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </a>
        <nav id="swup" class="site-head-left">
          <ul className="nav" role="menu">
            <li className="nav-home nav-home-link nav-current" role="menuitem">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="nav-about nav-home-link" role="menuitem">
              <Link to={`/about`}>About</Link>
            </li>
            <li className="nav-elements nav-home-link" role="menuitem">
              <Link to={`/elements`}>Elements</Link>
            </li>
          </ul>
        </nav>
        <div className="site-head-center">
          <Link className="site-head-logo" to={`/`}>
            {""}
          </Link>
        </div>
        <div className="site-head-right">
          <div className="social-links nav-home-link">
            <a
              href="https://www.facebook.com"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
            <Link
              to={`/rss.xml`}
              title="RSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .site-head {
          margin-top: 0;
          padding-top: 50px;
        }

        /* Site Navigation
/* ---------------------------------------------------------- */

        .bg-img {
          min-height: 100vh;
          width: 100vw;
          position: relative;
          display: flex;
          flex-direction: row;
        }

        .bg-img::after {
          content: "";
          background: url("../../../content/assets/darkSea.jpg");
          opacity: 0.9;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: -1;
        }

        .site-head {
          background-color: red;
          width: 100%;
          position: fixed;
          z-index: 1;
          margin-top: 50px;
          margin-bottom: 50px;
          font-size: 1.35rem;
        }

        .site-head-container-home {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          background-color: blue;
        }

        .site-head-open .site-head-container-home {
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }

        .solid-menu {
          background-color: rgb(25, 25, 25, 0.7);
          transition: background-color 1.5s ease 0s;
        }

        .site-head-open .solid-menu {
          background-color: transparent;
        }

        .site-head-container-home .site-head-left {
          margin-right: 0;
        }

        .site-head-container-home .site-head-right {
          margin-left: 0;
          margin-right: 5%;
        }

        .site-head-left {
          margin-right: 10rem;
          position: relative;
          justify-content: space-between;
          z-index: 100;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .nav {
          display: flex;
          margin: 0 0 0 -12px;
          padding: 0;
          list-style: none;
        }

        .site-head li {
          display: block;
          margin: 0;
          padding: 0;
        }

        .site-head-left .nav-home-link a,
        .site-head-right .nav-home-link a {
          color: #fff;
        }

        .site-head-left a,
        .site-head-right a {
          display: block;
          margin: 0;
          padding: 10px 12px;
          color: var(--color-base);
          font-weight: 600;
          opacity: 0.4;
        }

        .nav-current a,
        .site-head a:hover {
          text-decoration: none;
          opacity: 1;
        }

        .site-head-center {
          position: absolute;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .site-head-logo {
          flex-shrink: 0;
          display: block;
          padding: 10px;
          color: rgba(0, 0, 0, 0.4);
          font-size: 2.1rem;
          line-height: 1em;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .site-head-logo:hover {
          text-decoration: none;
        }

        .site-head-logo img {
          display: block;
          margin-top: 2px;
          width: auto;
          height: 28px;
        }

        .site-head-right {
          margin-left: 10rem;
          position: relative;
          z-index: 100;
          flex-shrink: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .social-links {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .subscribe-button {
          display: block;
          padding: 4px 10px;
          border: var(--color-base) 1px solid;
          color: var(--color-base);
          font-size: 1.2rem;
          line-height: 1em;
          border-radius: 10px;
          opacity: 0.8;
        }

        .subscribe-button:hover {
          text-decoration: none;
          opacity: 1;
        }

        .rss-button {
          opacity: 0.4;
        }

        .rss-button:hover {
          opacity: 1;
        }

        .rss-button svg {
          margin-bottom: 1px;
          height: 2.1rem;
          fill: var(--color-base);
        }

        /* Mobile Nav Menu
    /* ---------------------------------------------------------- */

        .nav-burger {
          display: none;
          position: absolute;
          top: 50px;
          left: 50px;
          z-index: 9999;
          padding: 12px 12px 12px 0;
        }

        @media (max-width: 850px) {
          .site-head-container-home {
            height: 45px;
          }

          .site-head-open .site-head-container-home {
            max-height: 50%;
            height: 100%;
          }

          .nav-burger {
            display: block;
          }
          .site-head-container {
            flex-direction: column;
            justify-content: flex-start;
            height: 40px;
            background: rgba(255, 255, 255, 0);
            z-index: -1;
            transition: all 0.4s ease-out;
            overflow: hidden;
          }
          .site-head-left,
          .site-head-right {
            display: none;
          }
          .site-head-left a,
          .site-head-right a {
            margin: 8px 0;
            padding: 1px 0;
            font-size: 2.6rem;
            line-height: 1.15em;
            font-weight: 200;
            opacity: 0;
            transition: transform 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99),
              opacity 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99);
            transform: scale(1.1) translateY(-25px);
          }
          .site-head-right a {
            padding: 5px 0;
            margin: 1px 0;
            font-size: 2rem;
          }
          .nav {
            width: 100%;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin: 3vw 0 0 0;
          }
          .site-head-left {
            order: 2;
            margin: 0;
            width: 100%;
          }
          .site-head-center {
            order: 1;
            position: static;
            z-index: auto;
            display: flex;
            justify-content: center;
          }
          .site-head-right {
            order: 3;
            width: 100%;
            margin-top: 3vw;
          }
          .social-links {
            flex-direction: column;
            align-items: flex-start;
          }

          .site-head-open {
            background: rgba(255, 255, 255, 1);
            transition: background 0.5s ease-out;
            transition-delay: 0.25;
            overflow: hidden;
            height: 100vh;
          }

          .site-head-open .site-head-container {
            height: 100vh;
            transition: height 0.2s ease-in;
          }

          .site-head-open .site-head-left,
          .site-head-open .site-head-right {
            display: flex;
            z-index: 9999;
            height: auto;
            transition: height 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99);
            margin: 0;
            justify-content: center;
            flex-direction: column;
          }

          .site-head-open .site-head-left .nav {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }

          .site-head-open .site-head-left a,
          .site-head-open .site-head-right a {
            color: black;
            opacity: 1;
            transition: transform 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),
              opacity 0.9s cubic-bezier(0.4, 0.01, 0.165, 0.99);
            transform: scale(1) translateY(0px);
          }

          .site-head-open .nav-current a {
            border-bottom: var(--color-base) 2px solid;
          }
          .site-head-open .site-head-right a {
            opacity: 0.5;
          }
          .site-head-open .site-foot {
            display: block;
            position: fixed;
            z-index: 9999;
            bottom: 0;
            transition: transform 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
            transform: translateY(-4vw);
          }
        }
      `}</style>
    </header>
  )
}

export default Header
