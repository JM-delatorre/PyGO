import codeMute from '/public/icons/si_Code_muted.svg';
import Image from 'next/image';

const ButtonTranslate = ({handler, disabled}: {handler: any, disabled: boolean}) => {
    return (
        <button
            className="group relative inline-flex items-center overflow-hidden rounded px-8 py-3
            bg-sky-500 text-white active:bg-sky-500 
            dark:bg-sky-900 dark:text-slate-200 dark:active:bg-sky-900 
            focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50 "
            onClick={handler}
            disabled={disabled}
        >
            <span className="absolute -end-full transition-all group-hover:end-4 ">
                <Image src={codeMute} alt="" />
            </span>

            <span className="text-lg font-sans transition-all group-hover:me-4">
                Translate
            </span>
        </button>
    );
};

export default ButtonTranslate


