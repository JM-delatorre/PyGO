import trash from '/public/icons/si_Archive_alt.svg';
import Image from 'next/image';

const ButtonReset = ({handler, disabled}: {handler: any, disabled: boolean}) => {
    return (
        <button
            className="inline-block rounded-lg p-3 border border-sky-400 bg-sky-500  active:bg-indigo-500 
            dark:border-sky-800 dark:bg-sky-900  dark:active:bg-sky-800
            transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handler}
            disabled={disabled}
        >
            <span className="sr-only"> Reset </span>
            <Image src={trash} alt="" />
        </button>


        
    );
};

export default ButtonReset


