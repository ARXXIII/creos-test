import { FaHeart } from "react-icons/fa";
import { FaGithub, FaTelegram } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6">
            <div className="grid grid-cols-3 gap-x-6 w-full lg:w-fit">
                <a
                    href="https://github.com/PICKLEGENT"
                    target="_blanc"
                    className="flex justify-center items-center p-3 text-neutral-500 dark:text-neutral-400 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark"
                >
                    <FaGithub size={24} />
                </a>
                <a
                    href="https://t.me/AndrewRom"
                    target="_blanc"
                    className="flex justify-center items-center p-3 text-neutral-500 dark:text-neutral-400 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark"
                >
                    <FaTelegram size={24} />
                </a>
                <a
                    href="https://hh.ru/resume/4b71ce6fff0d4401220039ed1f677361696d45"
                    target="_blanc"
                    className="flex justify-center items-center p-3 font-semibold text-neutral-500 dark:text-neutral-400 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark"
                >
                    hh
                </a>
            </div>
            <div className="w-full lg:w-fit">
                <h1 className="flex gap-x-3 justify-center p-3 font-semibold text-neutral-500 dark:text-neutral-400 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark">Code with <FaHeart size={24} className="text-rose-500" /> by Andrew Romanov</h1>
            </div>
        </footer>
    )
}