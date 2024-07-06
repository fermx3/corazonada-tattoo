'use client';

import Link from 'next/link';

export default function Button({
  children,
  href,
  onClick,
  buttonType,
  handleClick,
}) {
  const customButtonStyles = {
    primary:
      'text-white bg-pink-accent hover:bg-pink-primary focus:ring-4 focus:ring-pink-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none z-10 lg:max-w-max uppercase',
    secondary:
      'text-pink-accent bg-white border border-pink-accent hover:bg-pink-accent hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none z-10 lg:max-w-max uppercase',
  };

  if (!href) {
    return (
      <button
        className={customButtonStyles[buttonType] || customButtonStyles.primary}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={customButtonStyles[buttonType] || customButtonStyles.primary}
      onClick={onClick && onClick}
    >
      {children}
    </Link>
  );
}
