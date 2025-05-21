import React from 'react';
import { images } from '../../data/data';

const ImageDetailPage = ({ params }) => {
    let imageDetails = images.find(photo => photo.id === parseInt(params.id));
    if (!imageDetails) {
        return <div>Image not found</div>;
    }
    return (
        <section className='max-w-7xl mx-auto px-4 py-8 h-dvh'>
            <div className='flex items-center justify-between pb-8'>
                <h1 className='text-3xl font-bold text-gray-800'>About photograph</h1>
            </div>
            <div className='imageDetails w-full overflow-hidden'>
                <div className='img-details'>
                    <p className='text-black pb-8'>
                        This photograph beautifully captures a moment in time, telling a story that resonates deeply with its viewers. The interplay of colors creates a vivid timeline, where each hue seems to narrate a chapter of its own.
                    </p>
                    <img
                        className='object-contain h-[80dvh] w-full pb-8'
                        src={imageDetails.src}
                        alt={imageDetails.alt} />
                </div>
            </div>
        </section>
    );
};

export async function generateStaticParams() {
    // Replace with your actual dynamic IDs
    const ids = Array.from({ length: 24 }, (_, i) => (i + 1).toString());

    return ids.map(id => ({ id }));
}

export default ImageDetailPage;