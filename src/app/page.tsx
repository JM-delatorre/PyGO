import ThemeSwitch from '../components/ThemeSwitch'
import ButtonContinue from '../components/ButtonContinue'
import Image from 'next/image'
import pygoLogo from '/public/icons/PyGo.svg'

export default function Home() {
    return (
        <main className='bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] min-h-screen p-5 flex flex-col
        from-lime-300 to-sky-400 
        dark:from-lime-700 dark:to-sky-700'>
            <header className='grid justify-items-end p-3'>
                <ThemeSwitch />
            </header>
            <section className='flex-1 p-3 flex justify-center items-center'>
                <div className=' flex flex-col justify-center gap-3'>
                    <Image className='h-1/2' src={pygoLogo} alt='' />
                    <h1 className='font-sans text-9xl  text-center text-white
            dark:text-slate-200'>
                        PyGo
                    </h1>
                    <h2 className='font-sans text-xl text-center text-white
            dark:text-slate-200'>
                        A Python to Go Translator
                    </h2>
                    <div className=' flex justify-center mt-10'>
                        <ButtonContinue />
                    </div>
                </div>
            </section>
        </main>
    )
}
