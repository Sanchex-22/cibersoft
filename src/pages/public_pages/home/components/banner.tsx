import { useState } from 'react'
import Images from '../../../../assets'
import Video from '../../../../assets/index_video'

export default function Banner () {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section
      id="hero"
      className="relative z-10 bg-black grid min-h-[35rem] lg:h-[80vh] max-h-[55rem] w-full grid-cols-12 grid-rows-4"
    >
      {!videoLoaded && (
        <img
          src={Images.banner || "#"}
          alt="banner"
          className="col-span-full row-span-full h-full w-full object-cover object-[center_70%] absolute inset-0 z-0"
        />
      )}

      <iframe
        src={`https://www.youtube.com/embed/${Video.video_url_yt}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&mute=1&playlist=${Video.video_url_yt}`}
        title="YouTube video"
        className={`col-span-full row-span-full h-full w-full object-cover object-[center_70%] absolute inset-0 transition-opacity duration-700 ${videoLoaded ? 'opacity-100 z-10' : 'opacity-0'}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        onLoad={() => setVideoLoaded(true)}
      ></iframe>

      <div className="z-20 absolute inset-0 bg-gradient-to-r from-black to-black opacity-50 col-span-full row-span-full"></div>

      <div className="z-30 px-6 col-span-full row-span-full mx-auto grid h-full w-full max-w-7xl grid-cols-12">
        <div className="col-span-full row-span-full flex flex-col items-center justify-center justify-gap-2 bg-opacity-50 px-2 md:items-start">
          <div className="flex flex-col h-full w-full py-10 lg:py-44 justify-end">
            <a href="/productos" className="text-white border-2 w-fit rounded-md px-3 py-1">
              Ver Más
            </a>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl select-none text-white font-bold py-2">
                Titulo <span className="text-chocolate-300">For Example</span>
              </h1>
              <p className="text-gray-400 lg:text-gray-200 w-full md:w-96">Mas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}