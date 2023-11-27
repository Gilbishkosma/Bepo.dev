'use client';
import { GoogleIcon } from '@/svg';
import { useGoogleLogin } from '@react-oauth/google';

interface LoginProp {
  showLoginForm: (value: boolean) => void;
}

/**
 * Renders a login form component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.showLoginForm - Callback function to control the display of the login form.
 * @returns {JSX.Element} The rendered component.
 */
const LoginForm = ({ showLoginForm }: LoginProp) => {
  const onCreateAccountClick = () => {
    showLoginForm(false);
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div>
      <p className='mb-6 text-center text-2xl'>Login Form</p>
      <button className='btn w-full justify-start' onClick={() => login()}>
        <GoogleIcon className='h-8' style={{ flex: '0.5' }} />
        Login with Google
      </button>
    </div>
  );
};

export default LoginForm;
