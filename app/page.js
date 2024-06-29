export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center p-3 max-h-screen'>
      <div className='flex items-center fixed h-screen w-screen'>
        {/* <h1 className='text-5xl text-center w-full'>Work in progress</h1> */}
      </div>
      <div className='shadow-xl border-2 border-white rounded-md max-h-90vh w-full'>
        <video
          playsInline
          autoPlay
          loop
          muted
          className='rounded h-full w-full object-cover'
        >
          <source src='/videos/main.mp4' type='video/mp4' />
        </video>
      </div>
    </main>
  );
}
