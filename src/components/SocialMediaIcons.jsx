const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/celeb/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin" src="../assets/linkedin.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/Celeste3140"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="Github" src="../assets/github.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/celecarambola/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src="../assets/instagram.png" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;