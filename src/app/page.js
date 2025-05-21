'use client';
import { useRouter } from 'next/navigation';
import { photos } from './data/data';
import Gallery from './gallery/page';
import Contact from './contact/page';

export default function Home() {
  const router = useRouter();
  const handlePhotoClick = (photo) => {
    router.push(`/gallery/${photo.id}`);
  }

  return (
    <main>
      <section className="hero">
        <div className="items-center justify-items-center min-h-screen pt-20 pb-20 gap-16 bg-black">
          <p className="text-gray-400 font-[family-name:var(--font-moonwalk)] uppercase text-3xl sm:text-6xl lg:text-9xl"><span className="text-amber-50">H</span>rishita <span className="text-amber-50">B</span>handari</p>
          <div className='glry-imgs'>
            {photos.map((photo) => (
              <div className='imgs-container' key={photo.id} onClick={() => handlePhotoClick(photo)}>
                <img className='photo' src={photo.src} alt={photo.alt} />
                <p className='text-white text-2xl absolute top-1/2 left-1/2 text-center -translate-1/2 font-[family-name:var(--font-moonwalk)]'>{photo.categoy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Gallery  onClick={handlePhotoClick}/>
      <Contact/>
    </main>
  );
};
