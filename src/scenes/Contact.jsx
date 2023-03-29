import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
    return (
        <section id="contact" className=" py-48">
            {/* heading */}
            <motion.div
                className="flex justify-end w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}

            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-text">Contact Me!</span>
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>
            </motion.div>
            {/* form n img */}

                <motion.div
                    className="basis-1/2 mt-10 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/1741ff7b8e6c65519ff0ad84f2ab4b6e"
                        method="POST"
                    >
                        <input
                            className="w-full border-solid border-2 rounded-md border-black bg-white font-semibold placeholder-opaque-black p-3"
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="text-ruby mt-1">
                                {errors.name.type === "required" && "Required!"}
                                {errors.name.type === "maxLength" && "You have exceeded max length!"}
                            </p>
                        )}
                        <input
                            className="w-full border-solid border-2 rounded-md border-black bg-white font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === "required" && "Required!"}
                                {errors.email.type === "pattern" && "Invalid email address!"}
                            </p>
                        )}
                        <textarea
                            className="w-full border-solid border-2 rounded-md border-black bg-white font-semibold placeholder-opaque-black p-3 mt-5"
                            name="message"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.message.type === "required" &&
                                    "This field is required."}
                                {errors.message.type === "maxLength" &&
                                    "Max length is 2000 char."}
                            </p>
                        )}
                        <button
                            className="border-solid border-2 border-black bg-blue text-white rounded-md py-3 px-7 font-semibold
                            hover:bg-blue hover:text-ruby font-opensans transition duration-500"
                            type="submit">
                            Send!
                        </button>
                    </form>
                </motion.div>

        </section>
    )
};
export default Contact;