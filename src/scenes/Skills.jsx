import "./Skills.css";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import IMG1 from "../assets/project-1.png";
import IMG2 from "../assets/project-2.png";
import IMG3 from "../assets/project-3.png";
import IMG4 from "../assets/Project-4.png";
import IMG5 from "../assets/project-5.png";
import IMG6 from "../assets/project-6.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Manolos Barbershop",
      img: IMG1,
      description:
        "Manolo's barbershop is a local business that we have been partnered with to create a MERN stack application.",
      technologies: "Html | CSS | React Js | Node.js | Express | MongoDB",
      link: "",
      github: "https://github.com/SklylerF/manolo-barber-shop",
    },
    {
      id: 2,
      title: "Recipe Application",
      img: IMG4,
      description:
        "Food recipe website using https://www.themealdb.com/api.php",
        technologies: "Html | Scss | Javascript",
      link: "https://celeste3140.github.io/RecipeApp/",
      github: "https://github.com/Celeste3140/RecipeApp",
    },
    {
      id: 3,
      title: "Deep Thoughts - AWS",
      img: IMG2,
      description: "It is will be deployed to the cloud and replace the back-end API with cloud resources to handle the storage, database, and computing through AWS",
      technologies: "Html | Scss | AWS | React",
      link: "",
      github: "https://github.com/Celeste3140/AWS-Thought",
    },
    {
      id: 4,
      title: "Weather Application",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
        technologies: "Html | Scss | Javascript",
      link: "https://celeste3140.github.io/Weather-Dashboard/",
      github: "https://github.com/Celeste3140/Weather-Dashboard",
    },
    {
      id: 5,
      title: "README Generator",
      img: IMG5,
      description:
        "README generator so one can quickly and easily generate a README file. This application is used through a command-line application.",
      technologies: "Javascript",
      link: "",
      github: "https://github.com/Celeste3140/Professional-README-Generator",
    },
    {
      id: 6,
      title: "Javascript Quiz",
      img: IMG6,
      description:
        "Time quiz on the fundamentals of Javascript code.",
      technologies: "Html | Scss | Javascript",
      link: "",
      github: "https://github.com/Celeste3140/Javascript-quiz",
    },
  ];

  return (
    <section id="portfolio">
      <section id="projects" className="pt-10 pb-24">
        {/* HEADINGS */}
        <motion.div
          className=" md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span>My</span> Projects
            </p>
            <div className="flex justify-center mt-5">
              <LineGradient width="w-2/3" />
            </div>
            <div className="flex justify-center mt-5">
            </div>
          </div>
          <p className="mt-10 mb-10">
          </p>
        </motion.div>
        </section>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content ">
            <a
                href={pro.github}
                target="_blank"
                className="btn text-ruby font-bold"
                rel="noreferrer"
              >
                GitHub Link
              </a>
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;