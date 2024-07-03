import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiGoogleDownasaur } from '@mdi/js';

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div className="text-2xl flex justify-center items-center font-bold text-gray-800">
        <Icon path={mdiGoogleDownasaur} size={1.5} />ARDHIKA
      </div>
    </Link>
  )
}