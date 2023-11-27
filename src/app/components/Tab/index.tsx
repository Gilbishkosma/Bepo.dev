import { useEffect } from 'react';

interface TabProps extends React.PropsWithChildren {
  name: string;
  ariaLabel: string;
  isChecked?: boolean;
}

const Tab = ({ name, ariaLabel, isChecked = false, children }: TabProps) => {
  useEffect(() => {
    console.log('hey');
    return () => {
      console.log('first');
    };
  }, [name]);

  return (
    <>
      <input
        type='radio'
        name={name}
        className='tab'
        aria-label={ariaLabel}
        defaultChecked={isChecked}
      />
      <div className='tab-content rounded-box border-base-300 bg-base-100 p-10'>
        {children}
      </div>
    </>
  );
};

export default Tab;
