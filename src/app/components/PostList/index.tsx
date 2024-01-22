import { postProp } from '@/interfaces';
import { PostDate, PostCard } from '@/app/components';

const PostList = ({ data }: { data: postProp[] }) => {
  return (
    <>
      <div className='grid justify-center'>
        <div className='mt-10 grid max-w-4xl gap-1 sm:grid-cols-1 md:grid-cols-3 md:gap-5'>
          {data.map((item) => (
            <>
              <PostDate classes='col-span-1' date={new Date(item.published_at).toDateString()} />
              <PostCard
                key={item.$id}
                {...item}
                classes='col-span-2 mb-10 md:mb-0'
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
