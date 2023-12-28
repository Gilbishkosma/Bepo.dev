import Link from 'next/link';

/**
 * Renders the navigation bar with login/profile button.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Header = () => {
  return (
    <>
      <div className='navbar rounded-lg bg-white shadow-xl'>
        <div className='flex-1'>
          <Link href='/'>
            <button className='btn btn-ghost text-xl normal-case'>
              BEPO.DEV
            </button>
          </Link>
        </div>
        <Link href='/about'>
          <p className='pr-5 hover:underline hover:decoration-pink-500 hover:decoration-wavy'>
            About
          </p>
        </Link>
      </div>
    </>
  );
};

export default Header;
