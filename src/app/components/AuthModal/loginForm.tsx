import { CustomInput } from '../Form';

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
  const onCreateAccountClick = (event) => {
    showLoginForm(false);
  };

  return (
    <>
      <p className='mb-6 text-center text-2xl'>Login Form</p>
      <form>
        <CustomInput title='Email' type='email' placeholder='Enter the email' />
        <CustomInput
          title='Password'
          type='password'
          placeholder='Enter the password'
        />
        <div className='mt-4 flex items-center justify-between'>
          <button
            type='button'
            className='btn-ghost btn-xs btn text-slate-700'
            onClick={onCreateAccountClick}
          >
            Create an account?
          </button>
          <button className='btn-success btn'>Submit</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
