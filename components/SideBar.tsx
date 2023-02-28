import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";
import { useTheme } from "next-themes";

const SideBar = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="https://kynguyenlamdep.com/wp-content/uploads/2022/08/avatar-anime-trai-dep.jpg"
        alt="user avatar"
        className="mx-auto rounded-full"
        width={128}
        height={128}
      />
      <h3 className="my-4 text-3xl font-medium tracking-wide font-kaushan">
        <span className="text-green">Duc</span> Dev
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-700">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-700"
        href="/images/blink.jpg"
        download="blink.jpg"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="" aria-label="Youtobe">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="" aria-label="Github">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="" aria-label="Linkedin">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* social icon */}
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-700"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>HaNoi,VietNam</span>
        </div>
        <p className="my-2">levietduc2000cb@gmail.com</p>
        <p className="my-2">0123456789/9876543211</p>
      </div>
      {/* Email button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:levietduc2000cb@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={handleChangeTheme}
      >
        Change Theme
      </button>
    </div>
  );
};

export default SideBar;
