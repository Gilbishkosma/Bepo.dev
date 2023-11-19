import Image from 'next/image';

/**
 * Renders the Profile button which contains the users image which also works as a dropdown
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Profile = () => {
  return (
    <div className='dropdown-end dropdown'>
      <label tabIndex={0} className='btn-ghost btn-circle avatar btn'>
        <div className='w-10 rounded-full'>
          <Image alt='profile' src='/profile.svg' width='120' height='80' />
        </div>
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow'
      >
        <li>
          <a className='justify-between'>
            Profile
            <span className='badge'>New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
