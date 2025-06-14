export const APP_CONFIG = {
  name: "HealthCare Search",
  version: "1.0.0",
  description: "Find healthcare providers and services near you",
};

export const NAVIGATION_ITEMS = [
  { id: "home", label: "Home", path: "/" },
  { id: "services", label: "Services", path: "/services" },
  { id: "providers", label: "Providers", path: "/providers" },
  { id: "about", label: "About", path: "/about" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export const SEARCH_CATEGORIES = [
  { id: "doctors", label: "Doctors", icon: "stethoscope" },
  { id: "hospitals", label: "Hospitals", icon: "building" },
  { id: "clinics", label: "Clinics", icon: "map-pin" },
  { id: "pharmacies", label: "Pharmacies", icon: "pill" },
  { id: "labs", label: "Labs", icon: "microscope" },
  { id: "specialists", label: "Specialists", icon: "user-check" },
];

export const BREAKPOINTS = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1200px",
};
