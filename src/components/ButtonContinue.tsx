import iconArrow from '/public/icons/si_Arrow_right.svg';
import Image from 'next/image';

const ButtonContinue = () => {

    return (
        <a
            className="group relative inline-flex items-center overflow-hidden rounded px-8 py-3
            bg-sky-500 text-white active:bg-sky-500 
            dark:bg-sky-900 dark:text-slate-200 dark:active:bg-sky-900 
            focus:outline-none focus:ring"
            href="/translate"
        >
            <span className="absolute -end-full transition-all group-hover:end-4">
                <Image src={iconArrow} alt="" />
            </span>

            <span className="text-lg font-sans transition-all group-hover:me-4">
                Continue
            </span>
        </a>
    );
};

export default ButtonContinue


