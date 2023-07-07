import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Resume = () => {
    
    return (
        <section id="resume" className="pt-10 pb-24">
            {/* header  */}
            <div className="md:justify-between md:gap-16 mt-32">
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
                    <p className="font-playfair font-semibold text-4xl mb-5 text-text">
                        My <span className="text-text">Resume</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7"></p>
                </motion.div>
                <div className="md:justify-between mt-16 gap-32">
                <motion.div
                    className="mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl text-text">Relevant Work Experiences</p>
                            <p className="text-text font-playfair font-semibold text-2xl mt-3">Barista, Shift Supervisor, Certified Barista Trainer</p>
                            <p className="font-playfair font-semibold text-x3 mt-3 text-text">Starbucks</p>
                        
                        </div>
                    </div>
                    <p className="text-text mt-5 font-playfair">
                        Contributed to the store's success by assisting the store's 
                                manager in coordinating and operating daily store duties. I delegated daily 
                                tasks and deployed baristas to their respected positions in order to maintain 
                                the Starbucks experience. In a fast-moving environment with such high productivity, 
                                I encouraged and acknowledge well done behavior while also making sure everything is 
                                meeting to Starbucks standards. Created a positive learning environment by providing 
                                clear, specific, timely, and respectful coaching and feedback to new baristas to ensure 
                                operational excellence.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative">
                        <div className="z-10">
                            <p className="text-text font-playfair font-semibold text-2xl mt-3">Co-editor/writer of a research paper/design</p>
                            <p className="font-playfair font-semibold text-x3 mt-3 text-text ">University of California, Riverside</p>
                        
                        </div>
                    </div>
                    <p className="text-text mt-5 font-playfair">
                    The paper weighed on the Implications of Warehouse and Logistics Industry Expansion in the Inland Empire for Young College Students in the Region 
                    - Highlighted and explained how, due to the growing population in the Inland Empire, the region has been victim to increasing
                     traffic congestion, increasing frequency of heavy-duty trucks in the area, and declining air quality. The increase in both 
                     mobile sources and industrial facilities used for warehousing, factories, logistics, and fulfillment centers is having lasting 
                     and damaging affects on the surrounding community.
                    </p>
                    <div>
                        <a href="https://docs.google.com/document/d/e/2PACX-1vQKAhRWAIwpB1l8AOhd57hZUWWsx4pwln23YO4ky8SfRAo2Wb6BbHJUFfYLS2FH70W3lWyC5mAVInhs/pub" target="_blank" rel="noreferrer">
                            <button className="border-solid border-2 border-black bg-green text-white rounded-md py-3 px-7 font-semibold
                        hover:bg-green hover:text-ruby font-opensans transition duration-500">View paper here</button>
                        </a>

                    </div>
                </motion.div>
                <motion.div
                    className="mt-10"
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
                        <p className="font-playfair font-semibold text-5xl text-text">Education</p>
                        <p className="text-text font-playfair font-semibold text-2xl mt-3">University of California, Riverside</p>
                            <p className="font-playfair font-semibold text-x3 mt-3 text-text">Bachelor of Science</p>
                        </div>
                    </div>
                    <p className="font-playfair mt-5 text-text">
                    Recieved a BS in sustainability studies. With a background in biology I studied and investigated the means to maintain
                     environmental health, create economic welfare, and pursue social justice in a changing world. I learn how to protect,
                      preserve and make the smartest possible use of the planet's natural resources.
                    </p>
                </motion.div>
                <motion.div
                    className="mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative">
                        <div className="z-10">
                            <p className="text-text font-playfair font-semibold text-2xl mt-3">University of California, Riverside Extension</p>
                            <p className="font-playfair font-semibold text-x3 mt-3 text-text">Web Development Certification</p>
                        
                        </div>
                    </div>
                    <p className="mt-5 font-playfair text-text">
                    Completed this fast-pace promgram, immersive curriculum, where I the skills needed to become proficient in front end and 
                    back end coding technologies. I have completed the program with the skills needed to become a full stack web developer.
                    </p>
                </motion.div>
                </div>
            </div>

        </section>
    )
}



export default Resume;