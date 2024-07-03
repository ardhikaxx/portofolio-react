import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div className="text-2xl font-bold text-gray-800">
        ARDHIKA
      </div>
    </Link>
  )
}