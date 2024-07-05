import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '@/public/images/logo-simple.png';

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div className="text-2xl flex justify-center items-center font-bold text-gray-800">
        <Image className="relative" src={LogoImage} width={50} height={50} alt="Logo" /> ARDHIKA
      </div>
    </Link>
  )
}