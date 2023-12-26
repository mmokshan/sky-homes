import React, { useState,useLayoutEffect   } from "react";

const NavbarRes = () => {
    const [isSticky, setIsSticky] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 1;
      setIsSticky(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header  ${isSticky ? "sticky" : ""}`}  >
      <nav className="nav container">
        <div className="nav__data">
          <a href="/" className="nav__logo">
            SHE
          </a>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="ri-menu-line nav__burger"></i>
            <i className="ri-close-line nav__close"></i>
          </div>
        </div>

        {/* =============== NAV MENU =============== */}

        <div
          className={`nav__menu ${isMenuVisible ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <a href="/" className="nav__link">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="nav__link">
                About
              </a>
            </li>
            <li>
              <a href="/admin" className="nav__link">
                Admin
              </a>
            </li>

            {/* =============== DROPDOWN 1 =============== */}
            {/* <li className="dropdown__item">
              <div className="nav__link">
                Services{" "}
                <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <a href="/" className="dropdown__link">
                    Construction
                  </a>
                </li>

                <li>
                  <a href="/" className="dropdown__link">
                    Estimate Preperation
                  </a>
                </li>
                <li>
                  <a href="/" className="dropdown__link">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="/" className="dropdown__link">
                    House Plan
                  </a>
                </li> 
              </ul>
            </li> */}

            {/* =============== DROPDOWN 2 =============== */}
            <li className="dropdown__item">
              <div className="nav__link">
                <a href="/projects" className="nav__dropdown-link">
                Projects{" "}

                </a>
                <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <a href="/" className="dropdown__link">
                    Commercial Building
                  </a>
                </li>

                <li>
                  <a href="/" className="dropdown__link">
                    Housing Projects
                  </a>
                </li>

                <li>
                  <a href="/" className="dropdown__link">
                    Road Projects
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/" className="nav__link">
                Carriers
              </a>
            </li>
            <li>
              <a href="/contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarRes;
