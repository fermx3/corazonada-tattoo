import Loader, { LOADER_TYPE_CLASSES } from './loader';

export default function LoaderWithContainer() {
  return (
    <div className='max-w-screen-xl m-auto py-20 px-5 flex items-center justify-center flex-col gap-10'>
      <Loader type={LOADER_TYPE_CLASSES.large} />
    </div>
  );
}
