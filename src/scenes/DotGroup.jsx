import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-ruby before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-ruby before:left-[-50%] before:top-[-50%]`;

    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
                className={`${selectedPage === "home" ? selectedStyles : "bg-f-blue"}
            w-3 h-3 rounded-full`}
                href="home"
                onClick={() => setSelectedPage("home")} />

                <AnchorLink
                className={`${selectedPage === "Skills" ? selectedStyles : "bg-f-blue"}
            w-3 h-3 rounded-full`}
                href="Skills"
                onClick={() => setSelectedPage("Skills")} />
                
                <AnchorLink
                className={`${selectedPage === "Projects" ? selectedStyles : "bg-f-blue"}
            w-3 h-3 rounded-full`}
                href="Projects"
                onClick={() => setSelectedPage("Projects")} />

                <AnchorLink
                className={`${selectedPage === "Resume" ? selectedStyles : "bg-f-blue"}
            w-3 h-3 rounded-full`}
                href="Resume"
                onClick={() => setSelectedPage("Resume")} />

                <AnchorLink
                className={`${selectedPage === "Conatct" ? selectedStyles : "bg-f-blue"}
            w-3 h-3 rounded-full`}
                href="Conatct"
                onClick={() => setSelectedPage("Contact")} />
        </div>
    )
}

export default DotGroup;