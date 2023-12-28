import about from '../about/page.mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';

const Post = () => {
  return (
    <>
      <div className='mt-5 grid items-center justify-center rounded-lg bg-white py-14'>
        <div className='max-w-3xl overflow-auto'>
          <article className='mdx-root prose mt-8 lg:prose-xl'>
            {/* @ts-expect-error */}
            <MDXRemote source={about} />
          </article>
        </div>
      </div>
    </>
  );
};

export default Post;
