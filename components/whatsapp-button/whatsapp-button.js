import Image from 'next/image';

export default function WhatsappButton() {
  return (
    <div className='fixed bottom-5 right-5'>
      <Image src='/icons/whatsapp.svg' alt='Whatsapp' width={50} height={50} />
    </div>
  );
}
