import Loader, { LOADER_TYPE_CLASSES } from '@/components/ui/loader';

export default function Loading() {
  return (
    <div className='fixed w-screen h-dvh flex justify-center items-center bg-soft-pink'>
      <Loader type={LOADER_TYPE_CLASSES.large} />
    </div>
  );
}
