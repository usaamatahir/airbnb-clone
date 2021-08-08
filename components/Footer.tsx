import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
        <p>HotelTonight</p>
        <p>Airbnb for Work</p>
        <p>Made Possible by Hosts</p>
        <p>Careers</p>
        <p>Founder's Letter</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>Against Discrimination</p>
        <p>Accessibility</p>
        <p>Airbnb Associates</p>
        <p>Frontline Stays</p>
        <p>Guest Refferals</p>
        <p>Gift Cards</p>
        <p>Airbnb.org</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">HOST</h5>
        <p>Host your Home</p>
        <p>Host an Online Experience</p>
        <p>Host an Experience</p>
        <p>Responsible Hosting</p>
        <p>Resource Center</p>
        <p>Community Center</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">Support</h5>
        <p>Our COVID-19 Response</p>
        <p>Help Center</p>
        <p>Cancellation options</p>
        <p>Neighborhood Support</p>
        <p>Trusty & Safety</p>
      </div>
    </div>
  );
};

export default Footer;
