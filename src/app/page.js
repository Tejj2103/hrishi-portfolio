'use client';
import { useRouter } from 'next/navigation';
import { images } from './data/data';
import Link from 'next/link';
import Contact from './contact/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  const router = useRouter();
  const handlePhotoClick = (photo) => {
    // router.push(`/gallery/${photo.id}`);
  }

  return (
    <main>
      <section className="hero">
        <div className="items-center justify-items-center pt-20 pb-20 gap-16 bg-black">
          <p className="text-gray-400 font-[family-name:var(--font-moonwalk)] uppercase text-2xl sm:text-6xl lg:text-9xl"><span className="text-amber-50">H</span>rishita <span className="text-amber-50">B</span>handari</p>
          <div className='flex flex-row gap-4 p-8'>
            <button className='text-gray-400 text-xl sm:text-2xl pr-6 pl-6 pb-2 pt-2 font-[family-name:var(--font-poppins)] rounded-2xl border-1 border-gray-400 hover:text-black hover:bg-white cursor-pointer' onClick={() => router.push('/photography')}>Photography</button>
            <button className='text-gray-400 text-xl sm:text-2xl pr-6 pl-6 pb-2 pt-2 font-[family-name:var(--font-poppins)] rounded-2xl border-1 border-gray-400 hover:text-black hover:bg-white cursor-pointer' onClick={() => router.push('/arts')}>Arts</button>
          </div>
          <div className='flex flex-col items-center justify-center p-8'>
            <p className='text-white font-[family-name:var(--font-moonwalk)]'>About me</p>
            <p className='text-center text-gray-400 p-8 w-full sm:w-[60%] '>Eternal learner with hands-on experience in diverse projects across various programming
              languages. Proficient in technical skills, complemented by strong public speaking, project
              guidance, and an intrapreneurial mindset that drives continuous growth both in studies
              and at work.</p>
            <div className='flex flex-row gap-4 p-8'>
              <FontAwesomeIcon
                onClick={() => router.push('https://www.instagram.com/bhandari.hrishita/')}
                size='2x'
                icon={faInstagram}
                className="fa-fw hover:text-white cursor-pointer"
                color='#99a1af' />
              <FontAwesomeIcon
                onClick={() => router.push('https://www.linkedin.com/in/hrishita-bhandari-309183197/')}
                size='2x'
                icon={faLinkedin}
                className="fa-fw hover:text-white cursor-pointer"
                color='#99a1af' />
              <FontAwesomeIcon
                // onClick={() => router.push('https://www.linkedin.com/in/hrishita-bhandari-309183197/')}
                size='2x'
                icon={faFacebook}
                className="fa-fw hover:text-white cursor-pointer"
                color='#99a1af' />
              <FontAwesomeIcon
                // onClick={() => router.push('https://www.linkedin.com/in/hrishita-bhandari-309183197/')}
                size='2x'
                icon={faGithub}
                className="fa-fw hover:text-white cursor-pointer"
                color='#99a1af' />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-8 photograph-section">
        <h1 className='font-[family-name:var(--font-moonwalk)] text-xl text-center'>Gallery</h1>
        <div style={styles.gridContainer}>
          {images.map((art, index) => (
            <div key={index} style={styles.gridItem}>
              <img src={art.src} alt={art.alt} style={styles.image} onClick={() => handlePhotoClick(art)} />
              <p style={styles.title}>{art.title}</p>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </main>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '16px',
    padding: '16px',
  },
  gridItem: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '2px',
  },
  title: {
    marginTop: '8px',
    fontSize: '14px',
    color: '#333',
  },
};
