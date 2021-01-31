import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./style.scss";
const Header = ({ data }) => (
  <header
    style={{
      background: `#fff`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      padding: `1em 10%`,
      marginBottom: `1.45rem`
    }}
  >
    <h1 style={{ margin: 0, fontSize: `1em` }}>
      <Link
        to="/"
        style={{
          color: `#000`,
          textDecoration: `none`,
          fontSize: `1em`,
          textDecorationStyle: `none`
        }}
      >
        {data.title}
      </Link>
    </h1>
    <nav>
      <div className="nav-item-continer">
        {data.navItems.map((navItem, index) => {
          return (
            <div className="nav-item" key={index}>
              <h5 style={{ margin: 0, fontSize: `1em` }}>
                <Link
                  key={navItem.key}
                  to={navItem.link}
                  style={{
                    color: `#000`,
                    textDecoration: `none`,
                    fontSize: `1em`,
                    textDecorationStyle: `none`,
                    fontWeight: `normal`
                  }}
                >
                  {navItem.displayName}
                </Link>
              </h5>
            </div>
          );
        })}
      </div>
    </nav>
    {/* <div className="nav-item" key={index}>
      <Link
        key={navItem.key}
        to={navItem.link}
        style={{
          color: `#000`,
          textDecoration: `none`,
          fontSize: `1em`,
          textDecorationStyle: `none`,
          fontWeight: `normal`,
        }}
      >
        <img />
      </Link>
    </div> */}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
