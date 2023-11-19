import { childrenNode } from '@/interfaces';
import Header from './header';


/**
 * Renders a custom layout component with a header, content and footer.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered within the layout.
 * @returns {JSX.Element} The rendered component.
 */
const CustomLayout = ({ children }: childrenNode) => {
  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-7xl p-1 sm:p-5'>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default CustomLayout;
