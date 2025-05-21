'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination } from 'swiper/modules';
import { images } from '../data/data';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/pagination';

const Gallery = (props) => {
  return (
    <section className="gallery">
      <div className='px-2 my-3 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {images.map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-full"
            data-swiper-parallax="-100"
          >
            <div className="w-full h-[550px] sm:h-50dvh md:h-50dvh lg:h-50dvh overflow-hidden rounded-[8px] shadow-lg">
              <img
                onClick={() => props.onClick(src)}
                src={src.src}
                alt={src.alt}
                className="w-full h-full object-cover hover:opacity-75 cursor-pointer"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="bg-[#ffffff] min-h-screen pt-20 pb-20 gap-16">
          <h1 className='text-center font-[family-name:var(--font-poppins)] text-3xl pb-8'>Gallery</h1>
          <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
            <div
              slot="container-start"
              className="parallax-bg"
              data-swiper-parallax="-20%"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                zIndex: -1,
              }}
            ></div>
            <Swiper
              modules={[Parallax, Pagination]}
              speed={800}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="h-full"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="flex items-center justify-center h-full"
                    data-swiper-parallax="-100"
                  >
                    <div className="w-full h-[650px] sm:h-60dvh md:h-60dvh lg:h-60dvh overflow-hidden rounded-[8px] shadow-lg">
                      <img
                        onClick={() => props.onClick(src)}
                        src={src.src}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}
    </section>
  )
}

export default Gallery;