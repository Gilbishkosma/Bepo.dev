import { getDocumentList, getDocument } from '@/appwrite';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import ENVS from '@/config';
import './post.css';
import { Message, TagList } from '@/app/components';

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, [remarkEmoji, { accessible: true }]],
    rehypePlugins: [[rehypePrettyCode, { theme: 'dark-plus' }]],
  },
};

const Post = async ({ params }: { params: { slug: string } }) => {
  const post = await getDocument(ENVS.APPWRITE.postsID, 'slug', params.slug);
  if (!post) {
    return <Message title='404 - Not Found' />;
  }
  return (
    <>
      <div className='mt-5 grid items-center justify-center rounded-lg bg-white px-5 py-14 sm:px-2 '>
        <div className='max-w-3xl overflow-auto'>
          <p className='text-6xl font-bold'>{post.title}</p>
          <TagList tags={post.tags} />
          <article className='mdx-root prose mt-8 lg:prose-xl'>
            {/* @ts-expect-error */}
            <MDXRemote source={post.body} options={options} />
          </article>
        </div>
      </div>
    </>
  );
};

export async function generateStaticParams() {
  const posts = await getDocumentList(ENVS.APPWRITE.postsID);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default Post;
