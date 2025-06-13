import React from "react";
import { Search, MapPin, Calendar } from "lucide-react";
import "./WellnessLanding.css";

import leftGalleryImage1 from "../../../src/assets/images/homepage/left-gallery-1.png";
import leftGalleryImage2 from "../../../src/assets/images/homepage/left-gallery-2.png";
import leftGalleryImage3 from "../../../src/assets/images/homepage/left-gallery-3.png";
import leftGalleryImage4 from "../../../src/assets/images/homepage/left-gallery-4.png";
import rightGalleryImage1 from "../../../src/assets/images/homepage/right-gallery-1.png";
import rightGalleryImage2 from "../../../src/assets/images/homepage/right-gallery-2.png";
import rightGalleryImage3 from "../../../src/assets/images/homepage/right-gallery-3.png";
import rightGalleryImage4 from "../../../src/assets/images/homepage/right-gallery-4.png";
import HealthcareSearchWidget from "../../components/HealthcareSearchWidget/HealthcareSearchWidget";

const WellnessLanding = () => {
  // Left gallery image collection (1, 2, 3, 4)
  const leftGalleryAssets = [
    leftGalleryImage1,
    leftGalleryImage2,
    leftGalleryImage3,
    leftGalleryImage4,
  ];

  // Right gallery image collection (5, 6, 7, 8)
  const rightGalleryAssets = [
    rightGalleryImage1,
    rightGalleryImage2,
    rightGalleryImage3,
    rightGalleryImage4,
  ];

  // Combined image collection for mobile display (1, 2, 3, 4, 5, 6, 7, 8)
  const completeImageCollection = [
    leftGalleryImage1,
    leftGalleryImage2,
    leftGalleryImage3,
    leftGalleryImage4,
    rightGalleryImage1,
    rightGalleryImage2,
    rightGalleryImage3,
    rightGalleryImage4,
  ];

  // Generate seamless infinite scroll sequences - triple the images for smooth infinite scroll
  const generateInfiniteSequence = (imageArray) => {
    return [...imageArray, ...imageArray, ...imageArray];
  };

  const infiniteLeftGallery = generateInfiniteSequence(leftGalleryAssets);
  const infiniteRightGallery = generateInfiniteSequence(rightGalleryAssets);
  const infiniteMobileGallery = generateInfiniteSequence(
    completeImageCollection
  );

  return (
    <div className="wellness-landing-wrapper">
      {/* Desktop Experience */}
      <div className="desktop-experience">
        {/* Animated Image Gallery Columns */}
        <div className="gallery-columns-container">
          {/* Left Gallery - Downward Animation */}
          <div className="gallery-column left-gallery">
            <div className="downward-animation">
              {infiniteLeftGallery.map((imageAsset, index) => (
                <div key={`left-${index}`} className="gallery-image-frame">
                  <img src={imageAsset} alt={`Medical ${(index % 4) + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Gallery - Upward Animation */}
          <div className="gallery-column right-gallery">
            <div className="upward-animation">
              {infiniteRightGallery.map((imageAsset, index) => (
                <div key={`right-${index}`} className="gallery-image-frame">
                  <img src={imageAsset} alt={`Medical ${(index % 4) + 5}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Central Content Section */}
          <div className="central-content-area">
            <div className="content-wrapper">
              <div className="hero-text-section">
                <h1 className="primary-heading">
                  Book an appointment with{" "}
                  <span className="gradient-text">
                    <br />
                    lifestyle medicine
                  </span>{" "}
                  experts
                </h1>
                <p className="hero-description">
                  Optimize your lifestyle and reverse chronic diseases.
                </p>
              </div>

              <HealthcareSearchWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Experience */}
      <div className="mobile-experience">
        <div className="mobile-content-wrapper">
          <div className="mobile-hero-section">
            <h1 className="mobile-primary-title">
              Book an appointment with{" "}
              <span className="mobile-gradient-text">
                <br />
                lifestyle medicine
              </span>{" "}
              experts
            </h1>
            <p className="mobile-hero-description">
              Optimize your lifestyle and reverse chronic diseases.
            </p>
          </div>

          <div className="mobile-search-form">
            <div className="mobile-input-container">
              <Search className="mobile-input-icon" size={20} />
              <input
                type="text"
                placeholder="Condition, procedure, etc."
                className="mobile-form-field"
              />
            </div>

            <div className="mobile-input-container">
              <MapPin className="mobile-input-icon" size={20} />
              <input
                type="text"
                placeholder="City, state, or zipcode"
                className="mobile-form-field"
              />
            </div>

            <div className="mobile-input-container">
              <Calendar className="mobile-input-icon" size={20} />
              <input
                type="text"
                placeholder="Insurance carrier"
                className="mobile-form-field"
              />
            </div>

            <button className="mobile-search-button">
              <Search size={20} />
              Find now
            </button>
          </div>

          {/* Mobile Horizontal Image Gallery */}
          <div className="mobile-image-gallery">
            <div className="horizontal-scroll-animation">
              {infiniteMobileGallery.map((imageAsset, index) => (
                <div key={`mobile-${index}`} className="mobile-gallery-frame">
                  <img src={imageAsset} alt={`Medical ${(index % 8) + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessLanding;
