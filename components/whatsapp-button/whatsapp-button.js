import Image from 'next/image';
import Link from 'next/link';

export default function WhatsappButton() {
  return (
    <div className='fixed bottom-5 right-5'>
      <Link href='https://wa.me/529841447501' target='_blank'>
        <Image
          src='/icons/whatsapp.svg'
          alt='Whatsapp'
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}
