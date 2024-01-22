import { defaultProp } from '@/interfaces';

const Root = ({ classes, children }: defaultProp) => {
  return (
    <>
      <div className={` min-h-screen mx-2 sm:mx-1 my-10 bg-white p-5 ${classes || ''}`}>
        {children}
      </div>
    </>
  );
};

export default Root;
