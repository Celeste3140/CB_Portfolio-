import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-ruby" : ""}
        hover:text-ruby transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
const navbarBackground = isTopOfPage ? "" : "d-beige"
    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">CB</h4>

                {/* Desktop nav */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Resume"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-d-beige p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIge
                       T0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCI+CjxwYXRoIGQ9Ik0gMyA3IEEgMS4wMDAxIDEuMDAwMSAwIDE
                       gMCAzIDkgTCAyNyA5IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyNyA3IEwgMyA3IHogTSAzIDE0IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAzIDE2IEwgM
                       jcgMTYgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDI3IDE0IEwgMyAxNCB6IE0gMyAyMSBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMyAyMyBMIDI3IDIzIEE
                       gMS4wMDAxIDEuMDAwMSAwIDEgMCAyNyAyMSBMIDMgMjEgeiI+PC9wYXRoPgo8L3N2Zz4="/>
                    </button>
                )}
                {/* mobile menu */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        {/* closed icon */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9
                                IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCI+CjxwYXRoIGQ9Ik0gNC43MDcwMzEyID
                                MuMjkyOTY4OCBMIDMuMjkyOTY4OCA0LjcwNzAzMTIgTCAxMC41ODU5MzggMTIgTCAzLjI5Mjk2ODggMTkuMjkyOTY5IEwgNC43MDcwMzE
                                yIDIwLjcwNzAzMSBMIDEyIDEzLjQxNDA2MiBMIDE5LjI5Mjk2OSAyMC43MDcwMzEgTCAyMC43MDcwMzEgMTkuMjkyOTY5IEwgMTMuNDE0M
                                DYyIDEyIEwgMjAuNzA3MDMxIDQuNzA3MDMxMiBMIDE5LjI5Mjk2OSAzLjI5Mjk2ODggTCAxMiAxMC41ODU5MzggTCA0LjcwNzAzMTIgMy4
                                yOTI5Njg4IHoiPjwvcGF0aD4KPC9zdmc+" />
                            </button>
                        </div>
                        {/* menu items */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2x1 text-lbeige">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Resume"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;