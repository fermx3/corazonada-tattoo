export default function PageLayout({ children, titulo }) {
  return (
    <div className='max-w-screen-xl m-auto py-10 px-5'>
      <h1 className='text-6xl'>{titulo}</h1>
      {children}
    </div>
  );
}
