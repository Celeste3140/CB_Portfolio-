import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
        >
            {/* image */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
                    before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-ruby before:z-[-1]"
                    >
                        <img
                            src="../assets/Profilepic.png"
                            alt="profile picture"
                            className="rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[500px]"
                        />
                    </div>
                ) : (
                    <img
                        src="../assets/Profilepic.png"
                        alt="profile picture"
                        className="rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[500px]"
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
                    <p className="text-6xl font-playfair xs:font-semibold z-10 text-center md:text-start">
                        Celeste {""}
                        <span
                            className="xs:relative xs:text-text xs:font-semibold z-20 xs:before:content-brush
                            before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
                            Baltazar
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                        I'm a full stack web developer based in California
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Landing;