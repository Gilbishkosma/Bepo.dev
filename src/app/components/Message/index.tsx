import { Root } from '@/app/components';

const Message = ({ title }: { title: string }) => {
  return (
    <Root classes='flex justify-center items-center'>
      <p className='font-sans text-xl font-medium'>{title}</p>
    </Root>
  );
};

export default Message;
