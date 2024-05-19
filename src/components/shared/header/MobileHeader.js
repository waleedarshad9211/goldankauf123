"use client";
import { routes } from "@/public/static/HomepageStatic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FooterLogo from "/public/assets/img/logo.png";

const MobileHeader = ({ isMenuOpen }) => {
  const [selectedNavItem, setSelectedNavItem] = useState(-1);
  const [pathName, setPathName] = useState("");
  const [activeUrl, setActiveUrl] = useState("");
  const [subPathName, setSubPathName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [activeDropdownItem, setActiveDropdownItem] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(-1);

  useEffect(() => {
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
    <div
      class={`offcanvas offcanvas-top ${isMenuOpen ? "d-block" : "d-none"}`}
      tabindex="-1"
      id="offcanvasWithBackdrop"
      aria-labelledby="offcanvasWithBackdropLabel"
      style={{ height: "100%" }}
    >
      <div class="offcanvas-header">
        <Link
          className={`navbar-brand ${
            selectedNavItem === "home" ? "active" : ""
          }`}
          onClick={() => setSelectedNavItem("home")}
          href="/"
          passHref
          style={{ width: "fit-content" }}
        >
          <Image
            className="Image-fluid"
            src={FooterLogo}
            alt="Money Gold Logo"
            width={200}
            height={100}
          />
        </Link>
        <button
          type="button"
          className={`btn-close cross-animation`}
          data-bs-dismiss="offcanvas"
        ></button>
        {/* <div
          className={`navbar-toggler-icon-bar ${
            isMenuOpen ? "d-none" : "d-block"
          }`}
        >
          <span
            className={`toggler-icon top-bar ${
              isMenuOpen ? "top-bar-open" : "top-bar-close"
            }`}
          ></span>
          <span
            className={`toggler-icon bottom-bar ${
              isMenuOpen ? "bottom-bar-open" : "bottom-bar-close"
            }`}
          ></span>
        </div> */}
      </div>
      <div class="offcanvas-body" style={{ width: "100%" }}>
        <nav className="navbar py-0 py-lg-2">
          <ul className="navbar-nav mb-2 mb-lg-0 w-100 justify-content-evenly">
            {routes.map((item, index) => (
              <li
                key={index}
                className={`nav-item dropdown accordion`}
                id="accordionPanelsStayOpenExample"
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
                  className={`nav-link accordion-item ${
                    activeUrl == item.path ? "active" : "inactive"
                  } ${item.submenu ? "dropdown-toggle" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedNavItem(index);
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
                    className={`dropdown-menu bg-dark sh ${
                      isDropdownOpen && item.pathName === pathName ? "show" : ""
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
                          onClick={(e) => {
                            e.preventDefault();
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
        </nav>
      </div>
    </div>
  );
};

export default MobileHeader;
