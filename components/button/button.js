import Link from 'next/link';

export default function Button({ children, href }) {
  return (
    <Link
      href={href}
      className='text-white bg-pink-accent hover:bg-pink-primary focus:ring-4 focus:ring-pink-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none z-10 lg:max-w-max uppercase'
    >
      {children}
    </Link>
  );
}
