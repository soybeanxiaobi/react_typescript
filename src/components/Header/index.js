import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import "./index.scss";
const EMUN_LINK = [
  {
    text: "useState",
    url: "/use-state",
  },
  {
    text: "useEffect",
    url: "/use-effect",
  },
  {
    text: "useAsync",
    url: "/use-async",
  },
];
class Header extends PureComponent {
  render() {
    const {
      location: { pathname },
    } = this.props;
    return (
      <div className="header-wried">
        {EMUN_LINK.map(({ text, url }) => (
          <div
            key={url}
            className={`columns ${url === pathname ? "action" : ""}`}
          >
            <NavLink to={url}>{text}</NavLink>
          </div>
        ))}
      </div>
    );
  }
}
const HeaderWithRouter = withRouter(Header);
export default HeaderWithRouter;
