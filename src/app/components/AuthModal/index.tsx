import { useState } from 'react';
import LoginForm from './loginForm';
import SignUpForm from './signupForm';

/**
 * Renders an authentication modal that toggles between a login form and a signup form.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const AuthModal = () => {
  /**
   * Represents the current state of the modal, whether it's displaying the login form or the signup form.
   */
  const [isLogin, setIsLogin] = useState(true);

  /**
   * Updates the state of the modal to display the specified form.
   *
   * @param {boolean} value - The value indicating whether to show the login form (true) or the signup form (false).
   * @returns {void}
   */
  const handleState = (value: boolean) => {
    setIsLogin(value);
  };

  // Render the login form if isLogin is true, otherwise render the signup form
  return (
    <div className='w-full max-w-xs'>
      {isLogin ? (
        <LoginForm showLoginForm={handleState} />
      ) : (
        <SignUpForm showLoginForm={handleState} />
      )}
    </div>
  );
};

export default AuthModal;
