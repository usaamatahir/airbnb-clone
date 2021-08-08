import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">ABOUT</h5>
        <p className="cursor-pointer">How Airbnb works</p>
        <p className="cursor-pointer">Newsroom</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Airbnb Plus</p>
        <p className="cursor-pointer">Airbnb Luxe</p>
        <p className="cursor-pointer">HotelTonight</p>
        <p className="cursor-pointer">Airbnb for Work</p>
        <p className="cursor-pointer">Made Possible by Hosts</p>
        <p className="cursor-pointer">Careers</p>
        <p className="cursor-pointer">Founder's Letter</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="cursor-pointer">Diversity & Belonging</p>
        <p className="cursor-pointer">Against Discrimination</p>
        <p className="cursor-pointer">Accessibility</p>
        <p className="cursor-pointer">Airbnb Associates</p>
        <p className="cursor-pointer">Frontline Stays</p>
        <p className="cursor-pointer">Guest Refferals</p>
        <p className="cursor-pointer">Gift Cards</p>
        <p className="cursor-pointer">Airbnb.org</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">HOST</h5>
        <p className="cursor-pointer">Host your Home</p>
        <p className="cursor-pointer">Host an Online Experience</p>
        <p className="cursor-pointer">Host an Experience</p>
        <p className="cursor-pointer">Responsible Hosting</p>
        <p className="cursor-pointer">Resource Center</p>
        <p className="cursor-pointer">Community Center</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">Support</h5>
        <p className="cursor-pointer">Our COVID-19 Response</p>
        <p className="cursor-pointer">Help Center</p>
        <p className="cursor-pointer">Cancellation options</p>
        <p className="cursor-pointer">Neighborhood Support</p>
        <p className="cursor-pointer">Trusty & Safety</p>
      </div>
    </div>
  );
};

export default Footer;
