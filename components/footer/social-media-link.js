import Image from 'next/image';
import Link from 'next/link';

export default function SocialMediaLink({ link, index, full = false }) {
  return (
    <div className={full ? 'w-full flex' : 'w-fit'}>
      <Link
        key={index}
        href={link.link}
        target='_blank'
        rel='noreferrer'
        className={full && 'w-full flex items-center gap-2 my-3'}
      >
        <Image
          src={link.icon}
          width={full ? 40 : 20}
          height={full ? 40 : 20}
          alt={`${link.name} icon`}
        />
        {full && <p>Síguenos en {link.name}</p>}
      </Link>
    </div>
  );
}
