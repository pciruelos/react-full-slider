import React,{useState,useRef,useEffect} from 'react'
import { Link } from "react-router-dom";
import ImageOne from '../images/1.png'
import Imagetwo from '../images/2.png'
import ImageThree from '../images/3.png'
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const SliderData = [
    {
        title:'Tacho PRo XL 2022',
        price:'$250',
        path:'/shop',
        label:'Shop Tacho Bikes',
        image: ImageOne,
        alt:'Shop Tacho Bikes alt'
    },
    {
        title:'Tacho Basic bike',
        price:'$150',
        path:'/shop',
        label:'Shop Tacho Bikes',
        image: Imagetwo,
        alt:'Shop Tacho Bikes alt'
    },
    {
        title:'Cargo tacho',
        price:'$400',
        path:'/shop',
        label:'Shop Tacho Bikes',
        image: ImageThree,
        alt:'Shop Tacho Bikes alt'
    },
]

const Hero = () => {
    const [current, setCurrent] = useState(0)
    const length = SliderData.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length -1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 3000)

        return function() {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])
    

    const nextSlide = () => { 
        setCurrent(current === length -1 ? 0 : current +1)
     };
     const prevSlide = () => { 
        setCurrent(current === 0 ? length -1 : current -1)
     };

     if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null
     }



  return (
    <div className='h-screen w-screen relative overflow-hidden flex justify-center items-center'>
        {SliderData.map((slide, i) => {
            return (
                <div key={i}>
                    {i === current && (
                        <div>
                        <img src={slide.image} alt={slide.alt} />
                        <div>
                            <h1>{slide.title}</h1>
                            <p>{slide.price}</p>
                           <Link to={{ pathname:'www.google.com'}}>
                           <button className='px-2 py-3 bg-pink-600 rounded-sm'>Go Shop!</button>
                           </Link>
                           <div>                       
                            <IoArrowBack onClick={prevSlide}/>                
                            <IoArrowForward onClick={nextSlide}/>
                           </div>
                        </div>
                        </div>
                    )}
                </div>
            )
        })}
    </div>
  )
}

export default Hero