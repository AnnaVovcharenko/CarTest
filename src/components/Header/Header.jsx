import { Link, useLocation } from "react-router-dom";
import { HeaderContainer, HeaderLink, HeaderHeader, HeaderLogo, HeaderP, HeaderPQ } from "./Header.styled";

export const Header = () => {
  const location = useLocation();

  const checkActivePage = (link) => {
    let page = location.pathname;
    if (page === "/react-homework-template") {
      page = "/home";
    }
    if (page === link) {
      return "Header_link-active";
    } else {
      return "Header_link";
    }
  };
  
  return (
    <HeaderContainer>
      <HeaderLogo  to={"/home"}>
        <HeaderP >Driving</HeaderP>
        <HeaderPQ >A</HeaderPQ>
        <HeaderP >Car</HeaderP>
      </HeaderLogo>

      <HeaderHeader>
        <HeaderLink className={checkActivePage("/")} to={"/home"}>
          Home
        </HeaderLink>
        <HeaderLink className={checkActivePage("/catalog")} to={"/catalog"}>
          Catalog
        </HeaderLink>
        <HeaderLink className={checkActivePage("/favorites")} to={"/favorites"}>
          Favorites
        </HeaderLink>
      </HeaderHeader>
    </HeaderContainer>
  );
};
