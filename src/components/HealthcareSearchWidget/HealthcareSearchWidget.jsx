import React from "react";
import { Search, MapPin, Calendar } from "lucide-react";
import "./HealthcareSearchWidget.css";

const HealthcareSearchWidget = () => {
  return (
    <div className="healthcare-search-container">
      <div className="search-widget-form">
        <div className="medical-condition-field search-input-field">
          <Search className="field-icon" size={20} />
          <input
            type="text"
            placeholder="Condition, procedure, speciality..."
            className="search-text-input"
          />
        </div>

        <div className="search-input-field">
          <MapPin className="field-icon" size={20} />
          <input
            type="text"
            placeholder="City, state, or zipcode"
            className="search-text-input"
          />
        </div>

        <div className="search-input-field">
          <Calendar className="field-icon" size={20} />
          <input
            type="text"
            placeholder="Insurance carrier"
            className="search-text-input"
          />
        </div>

        <button className="search-action-button">
          <Search size={20} />
          Find now
        </button>
      </div>
    </div>
  );
};

export default HealthcareSearchWidget;
