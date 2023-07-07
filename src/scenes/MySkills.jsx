import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className="pt-10 pb-24">
            {/* header n image */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair text-text font-semibold text-4xl mb-5">
                        My <span className="text-text">Skills</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7"></p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full before:border-2 before:border-black before:z-[-1]"
                        >
                            <img
                                src="../assets/skills.jpg"
                                alt="skills"
                                className="z-10 border-solid border-2 border-black max-w-[400px] md:max-w-[500px]"
                            />
                        </div>
                    ) : (
                        <img
                            src="../assets/skills.jpg"
                            alt="skills"
                            className="z-10 border-solid border-2 border-black"
                        />
                    )}
                </div>
            </div>
            {/* skills */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* exp */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair text-text font-semibold text-5xl">01</p>
                            <p className="font-playfair text-text font-semibold text-3xl mt-3">Frontend Development</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-lruby absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5 font-playfair text-text">
                        <ul classn="list-none md:list-disc ">
                            <li>React.js</li>
                            <li>jQuery</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </p>
                </motion.div>

                {/* exp 2*/}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair text-text font-semibold text-5xl">02</p>
                            <p className="font-playfair text-text font-semibold text-3xl mt-3">Backend Development</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-linkin absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="text-text font-playfair mt-5">
                        <ul class="list-none md:list-disc">
                            <li>SQL</li>
                            <li>jQuery</li>
                            <li>NodeJS</li>
                            <li>MongoDB</li>
                            <li>JavaScript</li>
                        </ul>
                    </p>
                </motion.div>
                {/* exp 3*/}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair text-text font-semibold text-5xl">03</p>
                            <p className="font-playfair text-text font-semibold text-3xl mt-3">Other Tools</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-must absolute right-0 top-0 z-[-1]" />

                    </div>
                    <p className="text-text font-playfair mt-5">
                        <ul class="list-none md:list-disc">
                            <li>Heroku</li>
                            <li>Insomia</li>
                            <li>Canva</li>
                            <li>Figma</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                        </ul>
                    </p>
                </motion.div>
            </div>

        </section>
    )
}

export default MySkills;