import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
        >
            {/* image */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isAboveMediumScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-30 before:-left-20 before:rounded-t-[400px]
                    before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-black before:z-[-1]"
                    >
                        <img
                            src="../assets/Profilepic.png"
                            alt="profile pic of celeste"
                            className="border-solid border-2 border-black rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
                        />
                    </div>
                ) : (
                    <img
                        src="../assets/Profilepic.png"
                        alt="profile pic of celeste"
                        className="border-solid border-2 border-black rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                    />
                )}
            </div>
            {/* main section */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl text-text font-playfair xs:font-semibold z-10 text-center md:text-start">
                        Celeste {""}
                        <span
                            className="xs:relative xs:text-text xs:font-semibold z-20 xs:before:content-brush
                            before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
                            Baltazar
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-text text-sm text-center font-opensans md:text-start">
                        I'm a full stack web developer based in California!
                    </p>
                </motion.div>
                {/* call to action */}
                <motion.div
                    className="space-x-1 flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <div>
                        <a href="https://docs.google.com/document/d/e/2PACX-1vTcZioQZ9DbQemenNO7goMin1rBlzD8VXmO_ZaKE8Guxa17SSvg4PYgzSKSi6c6ci6JCO74bjava9Ta/pub" target="_blank" rel="noreferrer">
                            <button className="border-solid border-2 border-black bg-green text-white rounded-md py-3 px-7 font-semibold
                        hover:bg-green hover:text-dbeige font-opensans transition duration-500">Resume</button>
                        </a>

                    </div>
                </motion.div>
                <motion.div className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;