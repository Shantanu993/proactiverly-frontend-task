import React, { useState, useRef, useEffect } from "react";
import "./HeaderNavigation.css";
import companyLogo from "../../../src/assets/images/brand/brand-logo.png";

const HeaderNavigation = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [authMenuExpanded, setAuthMenuExpanded] = useState(false);
  const dropdownReference = useRef(null);

  const handleMobileMenuToggle = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const handleAuthDropdownToggle = () => {
    setAuthMenuExpanded(!authMenuExpanded);
  };

  const processLoginAction = () => {
    console.log("Login clicked");
  };

  const processSignupAction = () => {
    console.log("Signup clicked");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownReference.current &&
        !dropdownReference.current.contains(event.target)
      ) {
        setAuthMenuExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="header-navigation">
      <div className="navigation-container">
        {/* Brand Logo Section */}
        <div className="brand-logo-section">
          <img src={companyLogo} alt="ProVital Logo" className="brand-icon" />
          <span className="brand-text">ProVital</span>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="navigation-menu desktop-navigation">
          <a href="#list-practice" className="navigation-link">
            List your practice
          </a>
          <span className="link-separator">|</span>
          <a href="#employers" className="navigation-link">
            For Employers
          </a>
          <span className="link-separator">|</span>
          <a href="#courses" className="navigation-link">
            Courses
          </a>
          <span className="link-separator">|</span>
          <a href="#books" className="navigation-link">
            Books
          </a>
          <span className="link-separator">|</span>
          <a href="#speakers" className="navigation-link">
            Speakers
          </a>
          <span className="link-separator">|</span>
          <a href="#doctors" className="navigation-link">
            Doctors
          </a>

          <div
            className="authentication-dropdown-wrapper"
            ref={dropdownReference}
          >
            <button
              className="navigation-link authentication-trigger"
              onClick={handleAuthDropdownToggle}
            >
              <span className="auth-text-container">
                <span className="authentication-link">Login</span>
                <span className="link-separator">/</span>
                <span className="authentication-link">Signup</span>
              </span>
              <svg
                className={`dropdown-chevron ${
                  authMenuExpanded ? "dropdown-chevron-rotated" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {authMenuExpanded && (
              <div className="authentication-dropdown">
                <div className="authentication-section">
                  <div className="authentication-row">
                    <span className="user-type-label">Doctor</span>
                    <div className="authentication-buttons">
                      <button
                        className="authentication-button login-button"
                        onClick={processLoginAction}
                      >
                        Login
                      </button>
                      <button
                        className="authentication-button signup-button"
                        onClick={processSignupAction}
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                  <div className="authentication-row">
                    <span className="user-type-label">Patients</span>
                    <div className="authentication-buttons">
                      <button
                        className="authentication-button login-button"
                        onClick={processLoginAction}
                      >
                        Login
                      </button>
                      <button
                        className="authentication-button signup-button"
                        onClick={processSignupAction}
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="mobile-menu-toggle">
          <button
            onClick={handleMobileMenuToggle}
            className="menu-toggle-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="hamburger-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <nav
        className={`mobile-navigation ${
          mobileMenuActive ? "mobile-navigation-active" : ""
        }`}
      >
        {/* Mobile Navigation Header */}
        <div className="mobile-navigation-header">
          <div className="mobile-brand-logo">
            <img src={companyLogo} alt="ProVital Logo" className="brand-icon" />
            <span className="brand-text">ProVital</span>
          </div>
          <button
            onClick={handleMobileMenuToggle}
            className="close-menu-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="close-menu-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Authentication Section */}
        <div className="mobile-authentication-section">
          <div className="authentication-dropdown-mobile">
            <div className="mobile-authentication-row authentication-border">
              <span className="user-type-label">Doctor</span>
              <div className="authentication-buttons">
                <button
                  className="authentication-button login-button"
                  onClick={processLoginAction}
                >
                  Login
                </button>
                <button
                  className="authentication-button signup-button"
                  onClick={processSignupAction}
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="mobile-authentication-row">
              <span className="user-type-label">Patients</span>
              <div className="authentication-buttons">
                <button
                  className="authentication-button login-button"
                  onClick={processLoginAction}
                >
                  Login
                </button>
                <button
                  className="authentication-button signup-button"
                  onClick={processSignupAction}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className="mobile-navigation-links">
          <a
            href="#doctors"
            className="mobile-navigation-link"
            onClick={handleMobileMenuToggle}
          >
            <span>Doctors</span>
            <svg
              className="navigation-arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#list-practice"
            className="mobile-navigation-link"
            onClick={handleMobileMenuToggle}
          >
            <span>List your practice</span>
            <svg
              className="navigation-arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#employers"
            className="mobile-navigation-link"
            onClick={handleMobileMenuToggle}
          >
            <span>For Employers</span>
            <svg
              className="navigation-arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#courses"
            className="mobile-navigation-link"
            onClick={handleMobileMenuToggle}
          >
            <span>Courses</span>
            <svg
              className="navigation-arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#books"
            className="mobile-navigation-link"
            onClick={handleMobileMenuToggle}
          >
            <span>Books</span>
            <svg
              className="navigation-arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#speakers"
            className="mobile-navigation-link"
            onClick={handleMobileMenuToggle}
          >
            <span>Speakers</span>
            <svg
              className="navigation-arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Background Overlay */}
      {mobileMenuActive && (
        <div
          className="mobile-background-overlay"
          onClick={handleMobileMenuToggle}
        ></div>
      )}
    </header>
  );
};

export default HeaderNavigation;
