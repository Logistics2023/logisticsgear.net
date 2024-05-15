'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmail } from '@/firebase/utils'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import Error from '@/components/Error'
import { services } from '@/db'
import Tag from '@/components/Tag'
import Service from '@/components/Service'
import TextMaquina from '@/components/TextMaquina'
import { useRouter } from 'next/navigation';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

import 'react-awesome-slider/dist/styles.css';

export default function Home() {
  const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

  const router = useRouter()
  const AutoplaySlider = withAutoplay(AwesomeSlider);


  const signInHandler = (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value
    email.length !== 0 && password.length !== 0 ? signInWithEmail(email, password, setUserSuccess) : setUserSuccess('Complete')
  }






  useEffect(() => {
    // user === undefined && onAuth(setUserProfile)
    // if (user !== undefined && user !== null) router.replace('/Cliente')
  }, [user])

  return (
    <main className="h-screen w-full  ">


      {/* <AwesomeSlider className='relative' play={true} interval={6000}> */}


      <section className=' '
      // style={{
      //   backgroundImage: `url(/bg-mobil.png)`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center bottom 30px',
      //   backgroundAttachment: 'fixed',
      //   backgroundSize: 'cover'
      // }}
      >
        {/* <video className='absolute top-0 w-full h-[100vh] object-cover object-bottom' autoPlay loop muted>
            <source src="/underwater.mp4" type="video/mp4" />
          </video> */}
        {/* <div className='relative min-h-[100vh] py-[50px] w-full lg:pt-10 pb-0 flex flex-col justify-around lg:flex-row items-center z-20' style={{background: '-gradient(to bottom, rgba(0, 6, 24, 0.87), #061A4D79)'}}> */}


        {navigator && navigator !== undefined && navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
          ? <video className='fixed bottom-0 w-full h-[100vh] pb-[10px] object-cover object-bottom ' autoPlay loop muted>
            <source src={"/bg-comp.mp4"} type="video/mp4" />
          </video>


          : <video className='fixed bottom-0 w-full h-[100vh] pb-[10px] object-cover object-bottom ' autoPlay loop muted>
            <source src={"/vista1-comp.mp4"} type="video/mp4" />
          </video>
        }


        {/* <div className='absolute top-0  w-full h-[100vh] object-cover z-10 bg-[#00000067]'></div> */}

        {/* <div className='relative min-h-[100vh] py-[50px] w-full lg:pt-10 pb-0 flex flex-col justify-around lg:flex-row items-center shadow-black shadow-2xl  z-20' style={{ background: '-gradient(to bottom, #000000,  #000000c7, #00000050' }}> */}

        <div className='relative min-h-[100vh] py-[50px] w-full lg:pt-10 pb-0 flex flex-col justify-around lg:flex-row items-center  z-20' style={{ background: '-gradient(to bottom, #000000,  #000000c7, #00000050' }}>


          {/* <video className='relative top-[-90px] w-[100vw] h-[80vw] object-cover   rounded-b-[50px] pt-[50px]' autoPlay loop muted>
            <source src="/logo.gif" type="video/mp4" />
          </video> */}

          <img src='/logo-comp.gif' className='inline-block w-[80vw] h-[80vw]  lg:flex justify-center items-end lg:w-[40vw] lg:h-[70vh]  object-cover object-center ' />
          {/* <img src='/logo.gif' className='inline-block w-[50vw]   lg:flex justify-center items-end lg:w-[50vw] lg:h-[100vh] rounded-full shadow-sm bg-[#61c0f7] shadow-[#97d9ff]' /> */}

          {/* <AutoplaySlider className='relative bg-transparent' play={true} interval={6000} buttons={false} bullets={false}>
          <div className=' bg-[#01A7EB]'>
            </div>

            <div className='h-full bg-[#01A7EB]'>
              <img src="/truck.svg" className='block w-screen h-full bg-[#01A7EB]' alt="" />
            </div>
            <div className='h-full bg-[#01A7EB]'>
              <img src="/ship.svg" className='block w-screen h-full bg-[#01A7EB]' alt="" />
            </div>
            <div className='h-full bg-[#01A7EB]'>
              <img src="/plane.svg" className='block w-screen h-full bg-[#01A7EB]' alt="" />
            </div>

           

     
          </AutoplaySlider> */}


          <div>
            <div className=' flex justify-center'>
              <TextMaquina />
            </div>


            <div className='bg-transparent flex justify-center flex-wrap px-5 py-10 pb-[200px]'>
              <ScrollAnimation
                animateIn='tada'
                initiallyVisible={true}>
                <Tag theme='Primary'>Transporte Terrestre</Tag>
              </ScrollAnimation>
              <ScrollAnimation animateIn='tada'
                initiallyVisible={true}>
                <Tag theme='Primary'>Transporte Maritimo</Tag>
              </ScrollAnimation>
              <ScrollAnimation animateIn='tada'
                initiallyVisible={true}>
                <Tag theme='Primary'>Transporte Aereo</Tag>
              </ScrollAnimation>
              <ScrollAnimation animateIn='tada'
                initiallyVisible={true}>
                <Tag theme='Primary'>Despacho Aduanero</Tag>
              </ScrollAnimation>
              <ScrollAnimation animateIn='tada'
                initiallyVisible={true}>
                <Tag theme='Primary'>Carga Proyecto</Tag>
              </ScrollAnimation>
            </div>
          </div>



          {/* <Slider content={services}/> */}
          {/* <div className='w-full flex flex-col  justify-center pb-[50px] lg:justify-around lg:w-[50vw] lg:h-auto  lg:pb-0 lg:p-12 lg:pt-[50px] px-[10px] lg:pr-[10px]'>

          <div className='w-full hidden lg:flex lg:justify-center'>
            <img src='/logo.svg' className='hidden h-[25vh]  lg:block' alt="" />
          </div>
          <br />

          <br />
          <div className='w-full h-[100px] flex flex-col justify-between lg:grid lg:grid-cols-2 lg:gap-5 '>
            <Link href="#Servicios" className='w-full'><Button theme="Secondary" >Servicios</Button></Link>
            <Link href={`https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Dental%20House,%20quisiera%20hacer%20una%20consulta...%20`} className='w-full'><Button theme="Primary" >Contactar</Button></Link>
          </div>
        </div> */}
        </div>

      </section>

      <section className='w-full z-1000' id="Servicios">
        {/* <div className='relative min-h-screen w-full flex flex-col  lg:flex-row justify-around items-center  bg-gradient-to-tr from-[#26678d9c] via-[#41b9ff81] to-[#26678d9c]'> */}

        <div className='relative px-5 py-12 w-full flex flex-col  lg:flex-row justify-around items-center  bg-gradient-to-tr from-[#2A52BE] via-[#3259c5] to-[#2A52BE]'>

          {/* <video className='absolute top-0  w-full h-[100vh] object-cover' autoPlay loop muted>
            <source src="/highway2.mp4" type="video/mp4" />
          </video> */}
          <div>

            <Subtitle><h3 className='text-[30px] text-[white] text-center font-medium  py-10'>Network Globale</h3></Subtitle>
            <ScrollAnimation animateIn='bounceInRight'
              animateOut='bounceOutLeft'
              initiallyVisible={true}
            >
              <p className=' text-[16px] text-[white]'>
                Nuestra red internacional, en combinación con las relaciones establecidas con los transportistas más importantes del mundo,
                nos permite responder rápidamente a las demandas de los mercados locales gracias a una amplia presencia en todo el territorio.
              </p>
            </ScrollAnimation>

          </div>




          <div className='w-full text-[white] grid grid-cols-2 gap-5 py-12'>


            <ScrollAnimation animateIn='flipInX'
              afterAnimatedIn={function afterAnimatedIn(v) {
                var t = "Animate In finished.\n";
                t += 'v.onScreen: ' + v.onScreen + '\n';
                t += 'v.inViewport: ' + v.inViewport;

              }}
              initiallyVisible={true}>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-[30px] font-medium'>1996</span>
                <span className='text-center'>AÑO DE FUNDACIÓN</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='flipInX'
              afterAnimatedIn={function afterAnimatedIn(v) {
                var t = "Animate In finished.\n";
                t += 'v.onScreen: ' + v.onScreen + '\n';
                t += 'v.inViewport: ' + v.inViewport;

              }}
              initiallyVisible={true}>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-[25px] font-medium'>La paz, Bolivia</span>
                <span className='text-center'>SEDE MUNDIAL</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='flipInX'
              afterAnimatedIn={function afterAnimatedIn(v) {
                var t = "Animate In finished.\n";
                t += 'v.onScreen: ' + v.onScreen + '\n';
                t += 'v.inViewport: ' + v.inViewport;

              }}>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-[30px] font-medium'>100 000 $</span>
                <span className='text-center'>FACTURACIÓN EN DOLARES EN 2023</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='flipInX'
              afterAnimatedIn={function afterAnimatedIn(v) {
                var t = "Animate In finished.\n";
                t += 'v.onScreen: ' + v.onScreen + '\n';
                t += 'v.inViewport: ' + v.inViewport;

              }}
              initiallyVisible={true}>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-[30px] font-medium'>1996</span>
                <span className='text-center'>AÑO DE FUNDACIÓN</span>
              </div>
            </ScrollAnimation>



          </div>

        </div>
      </section>

      <section className='relative w-full bg-[#4f8cc5]' id="Servicios">

        <video className='absolute top-0  w-full h-[100vh] object-cover z-10' autoPlay loop muted>
          <source src="/highway2.mp4" type="video/mp4" />
        </video>
        <div className='absolute top-0  w-full h-[100vh] object-cover z-10 bg-[#00000067]'></div>

        <div className='relative min-h-screen w-full flex flex-col  lg:flex-row justify-top items-center z-20 p-5'>



          <Subtitle> <h2 className="text-[white] text-[25px] font-medium">TRANSPORTE TERRESTRE</h2></Subtitle>
          <p className='bg-[#ffffffbd] p-5 my-10'>
            Somos uno de los principales operadores en el mercado de envíos internacionales. Ofrecemos servicios de transporte aéreo analizando
            sus necesidades y proponiendo soluciones adecuadas para su negocio.
          </p>

          <p className='bg-[#ffffffbd] p-5 my-10'>
            Somos uno de los principales operadores en el mercado de envíos internacionales. Ofrecemos servicios de transporte aéreo analizando
            sus necesidades y proponiendo soluciones adecuadas para su negocio.
          </p>

          <p className='bg-[#ffffffbd] p-5 my-10'>
            Somos uno de los principales operadores en el mercado de envíos internacionales. Ofrecemos servicios de transporte aéreo analizando
            sus necesidades y proponiendo soluciones adecuadas para su negocio.
          </p>
          {/* <ul className='min-w-[80%] grid grid-cols-1 gap-4'>
            {
              services.map((i, index) =>
                <div key={index}>
                  <Service i={i} index={index}></Service>
                  <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-8 bg-[#9EC011] border-0 dark:bg-gray-700" />
                    <span className="absolute px-3 font-medium text-[#0090A8] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 z-0">•</span>
                  </div>
                </div>
              )
            }
          </ul> */}
        </div>
      </section>











      <section className='relative w-full bg-[#3aa0ffa6]' id="Servicios">

        <video className='absolute top-0  w-full h-[100vh] object-cover object-right-bottom z-10' autoPlay loop muted>
          <source src="/avion.mp4" type="video/mp4" />
        </video>
        <div className='absolute top-0  w-full h-[100vh] object-cover z-10 bg-[#00000018]'></div>

        {/* <div className='absolute top-0  w-full h-[100vh] object-cover z-10 bg-[#0c9af841]'></div> */}

        <div className='relative min-h-screen w-full flex flex-col  lg:flex-row justify-top items-center z-20 p-5'>



          <Subtitle><h2 className="text-[white] text-[25px] font-medium">TRANSPORTE AEREO</h2></Subtitle>
          <p className='bg-[#ffffffbd] p-5 my-10'>
            Somos uno de los principales operadores en el mercado de envíos internacionales. Ofrecemos servicios de transporte aéreo analizando
            sus necesidades y proponiendo soluciones adecuadas para su negocio.
          </p>

          <p className='bg-[#ffffffbd] p-5 my-10'>
            Somos uno de los principales operadores en el mercado de envíos internacionales. Ofrecemos servicios de transporte aéreo analizando
            sus necesidades y proponiendo soluciones adecuadas para su negocio.
          </p>

          <p className='bg-[#ffffffbd] p-5 my-10'>
            Somos uno de los principales operadores en el mercado de envíos internacionales. Ofrecemos servicios de transporte aéreo analizando
            sus necesidades y proponiendo soluciones adecuadas para su negocio.
          </p>
          {/* <ul className='min-w-[80%] grid grid-cols-1 gap-4'>
            {
              services.map((i, index) =>
                <div key={index}>
                  <Service i={i} index={index}></Service>
                  <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-8 bg-[#9EC011] border-0 dark:bg-gray-700" />
                    <span className="absolute px-3 font-medium text-[#0090A8] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 z-0">•</span>
                  </div>
                </div>
              )
            }
          </ul> */}
        </div>
      </section>









      <section className='relative w-full bg-[#4f8cc5]' id="Servicios">

        <video className='absolute top-0  w-full h-[100vh] object-cover z-10' autoPlay loop muted>
          <source src="/barco.mp4" type="video/mp4" />
        </video>

        <div className='absolute top-0  w-full h-[100vh] object-cover z-10 bg-[#00529657]'></div>

        <div className='relative min-h-screen w-full flex flex-col  lg:flex-row justify-top items-center z-20 p-5'>



          <Subtitle><h2 className="text-[white] text-[25px] font-medium">TRANSPORTE MARITIMO</h2></Subtitle>
          <p className='bg-[#ffffffbd] p-5 my-10'>
            Somos uno de los principales operadores en el mercado de envíos internacionales. Ofrecemos servicios de transporte aéreo analizando
            sus necesidades y proponiendo soluciones adecuadas para su negocio.
          </p>

          <p className='bg-[#ffffffbd] p-5 my-10'>
            Somos uno de los principales operadores en el mercado de envíos internacionales. Ofrecemos servicios de transporte aéreo analizando
            sus necesidades y proponiendo soluciones adecuadas para su negocio.
          </p>

          <p className='bg-[#ffffffbd] p-5 my-10'>
            Somos uno de los principales operadores en el mercado de envíos internacionales. Ofrecemos servicios de transporte aéreo analizando
            sus necesidades y proponiendo soluciones adecuadas para su negocio.
          </p>
          {/* <ul className='min-w-[80%] grid grid-cols-1 gap-4'>
            {         
              services.map((i, index) =>
                <div key={index}>
                  <Service i={i} index={index}></Service>
                  <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-8 bg-[#9EC011] border-0 dark:bg-gray-700" />
                    <span className="absolute px-3 font-medium text-[#0090A8] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 z-0">•</span>
                  </div>
                </div>
              )
            }
          </ul> */}
        </div>
      </section>

























      {/* </AwesomeSlider> */}

    </main>

  )
}




// <div className='w-screen h-screen bg-gradient-to-t from-[#00061860] to-[#000618d1] flex flex-col justify-center items-center p-5 z-[50]'>
//   <div className={`space-y-6 lg:space-y-3 w-[100%] rounded-[30px] max-w-[350px]`} >
//     <div className='w-full text-center flex justify-center'>
//       <img src="/logo.svg" className='w-[300px] z-[30]' alt="User" />
//     </div>
//     <h5 className="text-[22px] text-center font-bold text-white text-[#F1BA06] z-[50]">Nosotros</h5>
//     <br />

//     <div className='text-center text-white text-[14px]'>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis modi nihil ducimus. Voluptatum nisi facilis quam omnis ducimus, tenetur ullam minus quod nostrum maxime deserunt dolores veniam sapiente ad.
//     </div>
//     <br />
//     <h5 className="text-[22px] text-center font-bold text-white text-[#F1BA06] z-[50]">Por que nosotros?</h5>
//     <br />

//     <div className='text-center text-white text-[14px]'>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis modi nihil ducimus. Voluptatum nisi facilis quam omnis ducimus, tenetur ullam minus quod nostrum maxime deserunt dolores veniam sapiente ad.
//     </div>
//     <Button type="submit" theme="Primary" click={() => router.push('/Login')}>Iniciar Sesión</Button>
//   </div>

// </div>
