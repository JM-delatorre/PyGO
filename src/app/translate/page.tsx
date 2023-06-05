"use client"
import ThemeSwitch from '../../components/ThemeSwitch'
import ButtonBack from '@/components/ButtonBack'
import { useState } from 'react';
import CodeTextArea from '@/components/CodeTextArea';
import ButtonTranslate from '@/components/ButtonTranslate';
import { makeTranslation } from '@/services/TranslatorService';
import ButtonReset from '@/components/ButtonReset';
import LoadingOverlay from '@/components/LoadingOverlay';


export default function Translate() {
    const [code, setCode] = useState('');
    const [translatedCode, setTranslatedCode] = useState('');
    const [loading, setLoading] = useState(false);

    const handleTranslate = async() =>{
        setLoading(true)
        const myData : any = await makeTranslation({data: code})
        let data = await myData.json()
        console.dir(data.data)
        setTranslatedCode(data.data)
        setLoading(false)
    }
    const handleReset = () =>{
        setCode('')
        setTranslatedCode('')
    }
    return (
        <main className='bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] min-h-screen p-5 flex flex-col
          from-lime-300 to-sky-400 
          dark:from-lime-700 dark:to-sky-700
          '>
            <header className='flex justify-between p-3'>
                <ButtonBack />
                <ThemeSwitch />
            </header>
            <section className='flex-1 p-3 flex flex-col justify-center'>
                <div className='rounded-lg mx-auto p-4 bg-sky-100 dark:bg-sky-900'>
                    <h2 className='font-sans text-3xl text-center text-neutral-700
                    dark:text-slate-200   '>
                        Place here your python code and let the magic happen
                    </h2>
                </div>

                <div className=' flex-1'>
                    <div className='flex flex-col sm:flex-row justify-center gap-5 mt-4  px-20'>
                        <div className='w-full  '>
                            <CodeTextArea code={code} setCode={setCode} lang='py' />
                        </div>
                        <div className='w-full  '>
                            <CodeTextArea code={translatedCode} setCode={setTranslatedCode} lang='go' />
                        </div>
                    </div>

                    <div className=' flex justify-center mt-10 gap-5'>
                        <ButtonTranslate handler={handleTranslate} disabled= {code.length <= 1}/>
                        <ButtonReset handler={handleReset} disabled= {code.length <= 1}/>
                    </div>
                </div>

            </section>
            <LoadingOverlay load= {loading}/>
        </main>
    )
}