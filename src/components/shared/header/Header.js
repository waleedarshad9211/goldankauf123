"use client";
import { routes } from "@/public/static/HomepageStatic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileHeader from "./MobileHeader";
import PhoneSvg from "./PhoneSvg";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
import Logo from "/public/assets/img/logo.png";
import ProvenExpert from "/public/assets/img/proven-expert.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";
import NTV from "/public/assets/img/ntv.png";

const Header = () => {
  const router = useRouter();
  const [selectedNavItem, setSelectedNavItem] = useState(-1);
  const [pathName, setPathName] = useState("");
  const [activeUrl, setActiveUrl] = useState("");
  const [subPathName, setSubPathName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [closedByBackdrop, setClosedByBackdrop] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [activeDropdownItem, setActiveDropdownItem] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(-1);

  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    if (closedByBackdrop) {
      // If the menu was closed due to backdrop click, open it immediately
      setIsMenuOpen(true);
      setClosedByBackdrop(false);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const closeMenuOnBackdropClick = (event) => {
    event.stopPropagation();
    setIsMenuOpen(false);
    setClosedByBackdrop(true);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.addEventListener("click", closeMenuOnBackdropClick);
    } else {
      document.body.removeEventListener("click", closeMenuOnBackdropClick);
    }

    return () => {
      document.body.removeEventListener("click", closeMenuOnBackdropClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setSubPathName("");
    if (window.location.pathname !== undefined) {
      let url = window.location.pathname;
      if (url) {
        let urlFoundInParent = routes.find((data) => data.path === url);
        if (urlFoundInParent) {
          setActiveUrl(urlFoundInParent.path);
          setSubPathName("");
        } else {
          routes.some((data) => {
            const subData = data?.submenu?.find(
              (subData) => subData?.path === url
            );
            if (subData) {
              setActiveUrl(data?.path);
              setSubPathName(subData?.path);
              return true; // Stop iteration once a match is found
            }
            return false;
          });
        }
      }
    }
  }, []);

  return (
    <header className="gold-header">
      <div className="container">
        <div className="row py-1 align-items-center header-top-wrapper">
          <div className="col-2 col-md-3 d-block d-lg-none text-md-end">
            <button
              className={`navbar_btn navbar-toggler ${
                isMenuOpen ? "active" : "inactive"
              }`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon">
                <div className="navbar-toggler-icon-bar">
                  <span
                    className={`toggler-icon top-bar ${
                      isMenuOpen ? "top-bar-open" : "top-bar-close"
                    }`}
                  ></span>
                  <span
                    className={`toggler-icon middle-bar ${
                      isMenuOpen ? "middle-bar-open" : "middle-bar-close"
                    }`}
                  ></span>
                  <span
                    className={`toggler-icon bottom-bar ${
                      isMenuOpen ? "bottom-bar-open" : "bottom-bar-close"
                    }`}
                  ></span>
                </div>
              </span>
            </button>
          </div>
          <div className="col-md-4 col-lg-4 col-5 d-flex align-items-center navbar-logo">
            <Link className={`navbar-brand `} href="/" passHref>
              <Image
                className="Image-fluid main_logo"
                src={Logo}
                alt="Goldankauf Logo"
              />
            </Link>
          </div>
          <div className="col-md-5 col-lg-3 col-4 d-flex align-items-center gap-md-3 header-imgs header_seal_column">
            <Image
              className="Image-fluid header_fourth_img me-1"
              src={NTV}
              alt=""
              width="87"
              height="68"
            />
            <Image
              className="Image-fluid m-icon me-1"
              src={EkomiVektor}
              alt=""
              width="87"
              height="68"
            />
            <Image
              className="Image-fluid m-icon me-1 d-none d-md-block"
              src={TrustedShops}
              alt=""
              width="87"
              height="68"
            />
            <Image
              className="Image-fluid d-none d-md-block me-1 proven-expert-Image"
              src={ProvenExpert}
              alt=""
              width="87"
              height="68"
            />
          </div>

          <div className="col-md-6 col-lg-4 text-end d-none d-lg-block ">
            <a
              href="tel:040 76118501"
              className="call-btn text-white position-relative"
            >
              <PhoneSvg />
              <span className="fnt-bld">{`040  76116444`}</span>
            </a>
            <p className="mb-0 mo-fr">
              <span className="fnt-bld "> MO - FR:</span> 10 - 15 UHR
            </p>
          </div>
        </div>
      </div>
      <div className="green-line"></div>

      <div className={`d-lg-none mob-navigation `}>
        <ul className="container d-flex justify-content-around mb-2 mb-lg-0 w-100">
          <li
            className="nav-item"
            onClick={() => {
              setActiveUrl("/so-funktionierts");
            }}
          >
            <Link
              className={`nav-link ${
                activeUrl == "/so-funktionierts" ? "active" : "inactive"
              }`}
              href="/so-funktionierts"
            >
              SO FUNKTIONIERT´S
            </Link>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setActiveUrl("/goldrechner");
            }}
          >
            <Link
              className={`nav-link ${
                activeUrl == "/goldrechner" ? "active" : "inactive"
              }`}
              href="/goldrechner"
            >
              GOLDRECHNER
            </Link>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setActiveUrl("/versandarten");
            }}
          >
            <Link
              className={`nav-link ${
                activeUrl == "/versandarten" ? "active" : "inactive"
              }`}
              href="/versandarten"
            >
              VERSANDARTEN
            </Link>
          </li>
        </ul>
      </div>
      <MobileHeader isMenuOpen={isMenuOpen} />
      <nav className="navbar navbar-expand-lg py-0 py-lg-2">
        <div className="container">
          <div className="navbar-collapse collapse" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0 w-100 justify-content-between">
              {routes.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item dropdown`}
                  onMouseEnter={() => {
                    setIsDropdownOpen(true);
                    setPathName(item.pathName);
                  }}
                  onMouseLeave={() => {
                    setIsDropdownOpen(false);
                    setActiveDropdownItem(-1);
                    setPathName("");
                  }}
                >
                  <Link
                    className={`nav-link ${
                      activeUrl == item.path ? "active" : "inactive"
                    } ${item.submenu ? "dropdown-toggle" : ""}`}
                    onClick={() => {
                      setSelectedNavItem(index);
                      setActiveDropdownItem(-1);
                      setPathName(item.pathName);
                      setActiveUrl(item.path);
                      setSubPathName("");
                    }}
                    href={item.path}
                  >
                    {item.pathName}
                  </Link>
                  {item.submenu && (
                    <ul
                      className={`dropdown-menu sh ${
                        isDropdownOpen && item.pathName === pathName
                          ? "show"
                          : ""
                      }`}
                    >
                      {item.submenu.map((submenuItem, innerIndex) => (
                        <li key={innerIndex}>
                          <Link
                            className={`nav-link dropdown-item ${
                              subPathName === submenuItem.pathName ||
                              submenuItem.path === subPathName
                                ? "active"
                                : "inactive"
                            }`}
                            onClick={() => {
                              setActiveDropdownItem(innerIndex);
                              setActiveUrl(submenuItem.parentPath);
                              setSubPathName(submenuItem.path);
                            }}
                            href={submenuItem.path}
                          >
                            {submenuItem.pathName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-none d-md-block d-lg-block nav_subheader_main_div">
        <div className="container">
          <div className="nav_subheader_main">
            <div className="nav_subheader_left">
              <div className="div1">DIAMANTEN BEWERTEN LASSEN</div>
              <div className="div2">JETZT KOSTENLOS</div>
            </div>
            <div className="nav_subheader_right">
              <div className="div1">LUXUSUHREN BEWERTEN LASSEN</div>
              <div className="div2">JETZT KOSTENLOS</div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none d-lg-none ">
        <div className="nav_subheader_mob_top">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="div1">DIAMANTEN BEWERTEN LASSEN</div>
              <div className="div2">JETZT KOSTENLOS</div>
            </div>
          </div>
        </div>
        <div className="nav_subheader_mob_bottom">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="div1">LUXUSUHREN BEWERTEN LASSEN</div>
              <div className="div2">JETZT KOSTENLOS</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
