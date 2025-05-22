'use client';
import { images } from '../data/data';
import { useRouter } from 'next/navigation';
const Photography = () => {
  const router = useRouter();
  const handlePhotoClick = (photo) => {
    router.push(`/gallery/${photo.id}`);
  }
  const photographs = images.filter((img) => img.category === 'Photography');
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 imgs-section">
      <div className="flex justify-center gap-4 mb-8">
        <button className='bg-[#000000] cursor-pointer text-white px-4 py-2 rounded-md' onClick={() => router.push('/')}>Home</button>
        <button className='bg-[#000000] cursor-pointer text-white px-4 py-2 rounded-md' onClick={() => router.push('/arts')}>Arts</button>
      </div>
      <h1 className='font-[family-name:var(--font-moonwalk)] text-xl text-center'>Photography</h1>
      <div style={styles.gridContainer}>
        {photographs.map((img, index) => (
          <div key={index} style={styles.gridItem}>
            <img src={img.src} alt={img.alt} style={styles.image} onClick={() => handlePhotoClick(img)} />
            <p style={styles.title}>{img.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

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

export default Photography;