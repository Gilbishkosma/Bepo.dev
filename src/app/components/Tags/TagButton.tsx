import { tagsProp } from '@/interfaces';
import Link from 'next/link';

const TagButton = ({ title }: tagsProp) => {
  return (
    <>
      <Link href={`/tag/${title}`}>
        <div className='badge badge-xs border-pink-400 p-5 text-slate-700 shadow-sm transition-all hover:badge-outline sm:badge-sm md:badge-md hover:cursor-pointer hover:border-pink-400  hover:font-medium hover:text-pink-500 active:-translate-y-1 active:border-pink-600'>
          {title}
        </div>
      </Link>
    </>
  );
};

export default TagButton;
