interface SignupProp {
  showLoginForm: (value: boolean) => void;
}

/**
 * Renders a signup form component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.showLoginForm - Callback function to control the display of the login form.
 * @returns {JSX.Element} The rendered component.
 */
const SignUpForm = ({ showLoginForm }: SignupProp) => {
  return (
    <>
      <p>Signup</p>
    </>
  );
};

export default SignUpForm;
