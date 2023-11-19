import Link from 'next/link';
import { LoginButton } from '../Buttons';
import Profile from './profile';

/**
 * Renders the navigation bar with login/profile button.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Header = () => {
  const isAuthenticated = false;
  return (
    <>
      <div className='navbar rounded-lg bg-base-100 shadow-sm'>
        <div className='flex-1'>
          <Link href='/'>
            <button className='btn btn-ghost text-xl normal-case'>
              BEPO.AI
            </button>
          </Link>
        </div>
        <div className='flex-none'>
          {!isAuthenticated ? <LoginButton text='Login' /> : <Profile />}
        </div>
      </div>
    </>
  );
};

export default Header;
