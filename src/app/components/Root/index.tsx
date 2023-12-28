import { defaultProp } from '@/interfaces';

const Root = ({ classes, children }: defaultProp) => {
  return (
    <>
      <div className={`mt-10 min-h-screen bg-white p-5 ${classes || ''}`}>
        {children}
      </div>
    </>
  );
};

export default Root;
