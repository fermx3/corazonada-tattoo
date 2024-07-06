export default function CardsContainer({ children }) {
  return (
    <div className='grid grid-cols-responsive items-baseline gap-20 pt-20 mb-20'>
      {children}
    </div>
  );
}
