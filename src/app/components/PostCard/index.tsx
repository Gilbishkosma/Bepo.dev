import { postProp } from '@/interfaces';
import Link from 'next/link';
import './card.css';

const PostCard = ({
  title,
  views,
  description,
  $createdAt,
  tags,
  slug,
  classes,
}: postProp) => {
  return (
    <Link href={`/${slug}`} className={`${classes}`}>
      <div className='root card bg-slate-50 p-5  transition-all hover:bg-slate-50 md:bg-white'>
        <p className='title mb-2 text-xl font-semibold text-slate-700'>
          {title}
        </p>
        <p className='text-base font-normal text-slate-500'>{description}</p>
        <p className='pt-3 text-base text-blue-400'>Read More {`>>`} </p>
      </div>
    </Link>
  );
};

export default PostCard;
