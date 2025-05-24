'use client';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
     const router = useRouter();
    return (
        <div className="bg-black text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-xl font-bold mb-6">connect with me! on  <FontAwesomeIcon
                onClick={() => router.push('https://www.instagram.com/bhandari.hrishita/')}
                size='x'
                icon={faInstagram}
                className="fa-fw hover:text-white cursor-pointer"
                color='#99a1af' /></h1>
        </div>
    )
}

export default Contact;