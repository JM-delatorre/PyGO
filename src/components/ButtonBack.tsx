import Image from 'next/image';
import arrowLeft from '/public/icons/si_Arrow_left.svg'
const ButtonBack = () => {

    return (
        <a
            className="inline-block rounded-lg p-3 border border-sky-400 bg-sky-500  active:bg-indigo-500 
            dark:border-sky-800 dark:bg-sky-900  dark:active:bg-sky-800
            transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
            href="/"
            >
            <span className="sr-only"> Go back</span>
                <Image src={arrowLeft} alt="" />
        </a>
    );
};

export default ButtonBack


