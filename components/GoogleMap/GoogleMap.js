import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3650.8238083940805!2d90.3467888!3d23.7892877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10bb04c20b7%3A0x1db5b134191afc35!2sFUTURE%20IT!5e0!3m2!1sen!2sbd!4v1670142868488!5m2!1sen!2sbd"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
