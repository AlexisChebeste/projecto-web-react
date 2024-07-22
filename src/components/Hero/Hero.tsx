import heroImage from '../../assets/images/hero.svg'
import { Button } from '../Button/Button'


export function Hero(){
    return (
        <section className="py-14 px-0">
            <div className='container flex flex-wrap items-center gap-[30px] md:flex-nowrap'>
                <div className="left">
                <h1 className='mb-5 max-w-[405px] md:text-[40px]'>
                    A digital agency specializing on
                    <span>mobile design </span>
                </h1>
                <p className='text-[22px] leading-[34px] mb-[30px] md:text-[18px]'>
                    We are an award winning design agency that strongly believes in the
                    power of creative ideas.
                </p>
                <Button content='Get started' href='/get-started'/>
                </div>
                <div className="right">
                    <img src={heroImage} alt="Hero image" />
                </div>    
            </div>
        </section>
    )
}