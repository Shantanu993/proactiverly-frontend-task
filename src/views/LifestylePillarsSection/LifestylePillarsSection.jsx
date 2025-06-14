import React, { useState, useEffect } from "react";
import "./LifestylePillarsSection.css";

// Import all pillar card images
import nutritionCardImage from "../../../src/assets/images/pillars/nutrition-card.png";
import physicalActivityCardImage from "../../../src/assets/images/pillars/physical-activity-card.png";
import sleepCardImage from "../../../src/assets/images/pillars/restorative-sleep-card.png";
import stressCardImage from "../../../src/assets/images/pillars/stress-management-card.png";
import socialCardImage from "../../../src/assets/images/pillars/social-connect-card.png";
import substanceCardImage from "../../../src/assets/images/pillars/substance-abuse-card.png";

// Import all pillar unit icons
import nutritionUnitIcon from "../../../src/assets/images/icons/nutrition-icon.png";
import physicalUnitIcon from "../../../src/assets/images/icons/activity-icon.png";
import sleepUnitIcon from "../../../src/assets/images/icons/sleep-icon.png";
import stressUnitIcon from "../../../src/assets/images/icons/stress-icon.png";
import socialUnitIcon from "../../../src/assets/images/icons/social-icon.png";
import substanceUnitIcon from "../../../src/assets/images/icons/substance-icon.png";

const LifestylePillarsSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [swipeStartX, setSwipeStartX] = useState(null);
  const [swipeEndX, setSwipeEndX] = useState(null);

  // Monitor device type for responsive behavior
  useEffect(() => {
    const detectMobileDevice = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };
    detectMobileDevice();
    window.addEventListener("resize", detectMobileDevice);
    return () => window.removeEventListener("resize", detectMobileDevice);
  }, []);

  const lifestylePillarsData = [
    {
      pillarId: 1,
      pillarTitle: "Nutrition",
      pillarDescription:
        "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
      pillarImage: nutritionCardImage,
      metricValue: "121/80",
      metricUnit: "mmHg",
      unitIcon: nutritionUnitIcon,
    },
    {
      pillarId: 2,
      pillarTitle: "Physical activity",
      pillarDescription:
        "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
      pillarImage: physicalActivityCardImage,
      metricValue: "32",
      metricUnit: "minutes",
      unitIcon: physicalUnitIcon,
    },
    {
      pillarId: 3,
      pillarTitle: "Restorative sleep",
      pillarDescription:
        "Consistent, quality sleep is fundamental to physical health, mental clarity, and emotional well-being.",
      pillarImage: sleepCardImage,
      metricValue: "8",
      metricUnit: "hours",
      unitIcon: sleepUnitIcon,
    },
    {
      pillarId: 4,
      pillarTitle: "Stress management",
      pillarDescription:
        "Effective stress management techniques help reduce anxiety, improve focus, and enhance overall quality of life.",
      pillarImage: stressCardImage,
      metricValue: "60",
      metricUnit: "bpm",
      unitIcon: stressUnitIcon,
    },
    {
      pillarId: 5,
      pillarTitle: "Social connection",
      pillarDescription:
        "Strong social relationships and community connections are vital for mental health and longevity.",
      pillarImage: socialCardImage,
      metricValue: "Feeling",
      metricUnit: "better",
      unitIcon: socialUnitIcon,
    },
    {
      pillarId: 6,
      pillarTitle: "Substance abuse",
      pillarDescription:
        "Avoiding harmful substances and addressing addiction issues is crucial for maintaining optimal health.",
      pillarImage: substanceCardImage,
      metricValue: "62",
      metricUnit: "Days",
      unitIcon: substanceUnitIcon,
    },
  ];

  const advanceToNextSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === lifestylePillarsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? lifestylePillarsData.length - 1 : prevIndex - 1
    );
  };

  const jumpToSlide = (slideIndex) => {
    setActiveSlideIndex(slideIndex);
  };

  // Touch handlers for mobile swipe functionality
  const handleTouchStart = (e) => {
    if (!isMobileDevice) return;
    setSwipeEndX(null);
    setSwipeStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isMobileDevice) return;
    setSwipeEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobileDevice || !swipeStartX || !swipeEndX) return;

    const swipeDistance = swipeStartX - swipeEndX;
    const isLeftSwipe = swipeDistance > 50;
    const isRightSwipe = swipeDistance < -50;

    if (isLeftSwipe) {
      advanceToNextSlide();
    } else if (isRightSwipe) {
      goToPreviousSlide();
    }
  };

  return (
    <div className="lifestyle-pillars-section">
      <div className="pillars-section-container">
        <div className="section-header-with-navigation">
          <div className="section-header-content">
            <p className="section-category-label">HOW IT WORKS</p>
            <h2 className="section-main-title">
              <span className="lifestyle-medicine-text">
                Lifestyle as medicine
              </span>
              <span className="pillars-subtitle">: The six pillars</span>
            </h2>
          </div>

          {!isMobileDevice && (
            <div className="navigation-button-group">
              <button
                className="navigation-control-button previous-slide-button"
                onClick={goToPreviousSlide}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="navigation-control-button next-slide-button"
                onClick={advanceToNextSlide}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {!isMobileDevice && (
          <div className="pillar-tab-navigation">
            {lifestylePillarsData.map((pillar, index) => (
              <button
                key={pillar.pillarId}
                className={`pillar-tab-button ${
                  index === activeSlideIndex ? "active-pillar-tab" : ""
                }`}
                onClick={() => jumpToSlide(index)}
              >
                {pillar.pillarTitle}
              </button>
            ))}
          </div>
        )}

        <div
          className="pillar-cards-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="pillar-cards-container"
            style={{
              transform: isMobileDevice
                ? `translateX(-${activeSlideIndex * (282 + 10)}px)`
                : `translateX(-${activeSlideIndex * 513}px)`,
            }}
          >
            {lifestylePillarsData.map((pillar) => (
              <div key={pillar.pillarId} className="lifestyle-pillar-card">
                <div className="pillar-card-image-section">
                  <img
                    src={pillar.pillarImage}
                    alt={pillar.pillarTitle}
                    className="pillar-card-image"
                  />
                  <div className="pillar-card-overlay">
                    <div className="pillar-metric-badge">
                      <img
                        src={pillar.unitIcon}
                        alt={pillar.metricUnit}
                        className="pillar-unit-icon"
                      />
                      <span className="pillar-metric-text">
                        <strong className="metric-value-text">
                          {pillar.metricValue}
                        </strong>{" "}
                        <span className="metric-unit-text">
                          {pillar.metricUnit}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pillar-card-content-section">
                  <h3 className="pillar-card-title">{pillar.pillarTitle}</h3>
                  <p className="pillar-card-description">
                    {pillar.pillarDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile swipe indicator dots */}
        {isMobileDevice && (
          <div className="mobile-pagination-dots">
            {lifestylePillarsData.map((_, index) => (
              <button
                key={index}
                onClick={() => jumpToSlide(index)}
                className={`pagination-dot ${
                  index === activeSlideIndex ? "active-pagination-dot" : ""
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LifestylePillarsSection;
