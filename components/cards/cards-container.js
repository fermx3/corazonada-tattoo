export default function CardsContainer({ children }) {
  return (
    <div className='grid grid-cols-responsive gap-20 pt-20 mb-20'>
      {children}
    </div>
  );
}
