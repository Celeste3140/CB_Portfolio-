import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-must z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                </p>
            </div>
            <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
        </motion.div>
    );
};
const Projects = () => {
    return (
      <section id="projects" className="pt-48 pb-48">
        {/* HEADINGS */}
        <motion.div
          className="md:w-2/5 mx-auto text-center"
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
              <span className="text-red">My</span> Projects
            </p>
            <div className="flex justify-center mt-5">
              <LineGradient width="w-2/3" />
            </div>
          </div>
          <p className="mt-10 mb-10">
          </p>
        </motion.div>
  
        {/* PROJECTS */}
        <div className="flex justify-center">
          <motion.div
            className="sm:grid sm:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ROWs */}
            <div>
              <a href="https://manolo-barbershop.herokuapp.com/" target="_blank">
            <Project title="Project 1" />
            </a>
            </div>
            <div>
              <a href="https://github.com/Celeste3140/AWS-Thought" target="_blank">
            <Project title="Project 2" />
            </a>
            </div>
            <div>
              <a href="https://celeste3140.github.io/Weather-Dashboard/" target="_blank">
            <Project title="Project 3" />
            </a>
            </div>
            <div>
              <a href="https://celeste3140.github.io/Password-Generator-Module3/" target="_blank">
            <Project title="Project 4" />
            </a>
            </div>
            <div>
              <a href="https://github.com/Celeste3140/Professional-README-Generator" target="_blank">
            <Project title="Project 5" />
            </a>
            </div>
            <div>
              <a href="https://github.com/Celeste3140/Javascript-quiz" target="_blank">
            <Project title="Project 6" />
            </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default Projects;