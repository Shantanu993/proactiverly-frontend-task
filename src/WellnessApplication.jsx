import "./WellnessApplication.css";
import WellnessLanding from "./views/WellnessLanding/WellnessLanding";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation";
import LifestylePillarsSection from "./views/LifestylePillarsSection/LifestylePillarsSection";

function WellnessApplication() {
  return (
    <>
      <div className="navigation-section">
        <HeaderNavigation />
      </div>
      <div className="main-application-container">
        <div className="hero-landing-section">
          <WellnessLanding />
        </div>
        <div className="decorative-divider-line" />
        <div className="pillars-content-section">
          <LifestylePillarsSection />
        </div>
      </div>
    </>
  );
}

export default WellnessApplication;
