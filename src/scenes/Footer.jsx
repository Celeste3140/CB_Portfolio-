import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
      <footer className="h-64 bg-ruby pt-10">
        <div className="w-10/12 mx-auto">
          <SocialMediaIcons />
          <div className="md:flex justify-center md:justify-between text-center ">
            <p className="font-playfair font-semibold text-2xl text-yellow">
              Celeste Baltazar
            </p>
            <p className="font-playfair text-md text-yellow ">
              ©2023 Made with 💖
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;