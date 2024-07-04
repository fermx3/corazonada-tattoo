export default function BigCard({ children }) {
  return (
    <div className='max-w-2xl bg-soft-pink md:p-20 rounded-3xl shadow-xl lg:mx-0 mx-3 p-10'>
      {children}
    </div>
  );
}
