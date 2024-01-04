/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolioayush.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AGROMINDS",
    description:
      "It Is a plant monitoring solution that revolutionizes the way plant owners track their plant's health and performance . Our platform offers a one click solution that captures real-time data on crucial parameters like temperature, humidity, soil moisture, light levels , nutritional values and PH values . It then seamlessly analyzes this data and presents actionable insights and recommendations for optimal plant health. What sets us apart is our user-friendly interface, reliability, and scalability, making it easy for plant owners of all backgrounds to benefit from our solution . By addressing technical challenges, educating potential customers, and emphasizing data security, we're poised to lead the market in plant monitoring services. With our innovative approach, we aim to become the go-to solution provider for plant owners in various industries . Join us in revolutionizing the way we monitor plant performance and unlock the full potential of your plants. Together, we'll cultivate a greener, more efficient future..",
    
  },
  {
    title: "BOTANICAL SYMPHONY",
    description:
      "Botanical symphony is an innovative project that explores the musical potential of plant veins. By transforming the structure of leaves into musical notes. we aim to create a unique and harmonious experience that merges art and science.",
  },
  {
    title: "AGROCARE",
    description:
      "APP FOR USER TO DETECT PEST INFESTICATION DISEASE IN PlANTS ",
  
  },
  {
    title: "AGROMINDS(Website)",
    description:
      "used for project related that show full description of that project its uses & friendly user interface for buying the product .",
    
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
