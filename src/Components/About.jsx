/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/wood.jpg";

const imageAltText = "wood background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a Software  Developer and a final year student. I consider myself highly inquisitive about Networking and IOT. I am looking for a dynamic firm that provides scope to enhance my knowledge. I love to be around people who talk about ideas and technologies. I would love to work with you. Lets Connect!.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "IOT DEVELOPER",
  "NETWORKING",
  "AUTOMATION",
  "DSA",
  "OOPS",
  "C++",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "With a passion for empowering students to achieve their goals and aspirations through technology, I am a Student Ambassador at Microsoft and a Management Lead at GDSC Arya, a community of developers, designers, and innovators. In these roles, I promote and facilitate learning opportunities for students in various technologies and platforms, such as Azure, GitHub, and Power Platform, and I lead a team of 15 members in planning, organizing, and executing events, workshops, and hackathons. I have successfully delivered multiple sessions on topics such as IoT, networking, and cloud computing, reaching over 500 participants , I also have experience as a C++ Developer at Happieloop, where I worked on a project involving data processing and analysis for a large client. I used SQL and TCP to handle and manipulate large volumes of data, and I applied my knowledge of network architecture and LAN to ensure optimal performance and security. I completed the project within the deadline and received positive feedback from my manager. I am a final year student pursuing my BTech in Computer Science at Arya College of Engineering and IT, where I have maintained a high academic record and earned multiple certifications, such as Emertxe Certified Embedded Professional, AMCAT Certified Data Processing Specialist, and SQL (Basic) by HackerRank. I am looking for a dynamic and innovative organization that provides scope to enhance my knowledge and skills in networking and IoT, and that values collaboration, growth, and impact. I love to be around people who are passionate, creative, and driven..";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
