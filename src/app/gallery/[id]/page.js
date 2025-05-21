import React from 'react';
import { images } from '../../data/data';

const ImageDetailPage = ({ params }) => {
    let imageDetails = images.find(photo => photo.id === parseInt(params.id));
    if (!imageDetails) {
        return <div>Image not found</div>;
    }
    return (
        <div className='flex flex-row items-center justify-center h-svh p-20 gap-16'>
            <div className='flex-1 h-svh w-svw'>
                <img
                    className='h-svh w-svw object-cover'
                    src={imageDetails.src}
                    alt={imageDetails.alt} />
            </div>
            <div className='flex-1'>
                <h2 className='text-gray-400 text-xl pb-4'>About this photograph</h2>
                <p className='text-black w-[60%]'>
                    This photograph beautifully captures a moment in time, telling a story that resonates deeply with its viewers. The interplay of colors creates a vivid timeline, where each hue seems to narrate a chapter of its own. From the warm tones that evoke a sense of nostalgia to the cooler shades that bring a calming balance, this image is a testament to the power of visual storytelling. It invites you to pause, reflect, and immerse yourself in the emotions it conveys.
                </p>
            </div>
        </div>
    );
};

export async function generateStaticParams() {
    // Replace with your actual dynamic IDs
    const ids = Array.from({ length: 24 }, (_, i) => (i + 1).toString());
  
    return ids.map(id => ({ id }));
  }

export default ImageDetailPage;