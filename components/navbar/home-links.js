import Link from 'next/link';

const links = [
  { name: '¿Quiénes somos?', href: '/#quienes-somos' },
  { name: 'Tatuadores invitados', href: '/#tatuadores-invitados' },
  { name: 'Blog', href: '/#blog' },
];

export default function HomeLinks({ onClick }) {
  return (
    <>
      {links.map((link) => (
        <li key={link.name} className='uppercase'>
          <Link href={link.href} onClick={onClick && onClick}>
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
}
