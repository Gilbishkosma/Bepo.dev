import { getDocumentList, getDocument } from '@/appwrite';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import ENVS from '@/config';
import './post.css';
import type { Metadata } from 'next'
import { Message, Root, TagList } from '@/app/components';

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, [remarkEmoji, { accessible: true }]],
    rehypePlugins: [[rehypePrettyCode, { theme: 'dark-plus' }]],
  },
};

interface Props{
  params: {
   slug: string
  }
}


const Post = async ({ params }: Props) => {
  const post = await getDocument(ENVS.APPWRITE.postsID, 'slug', params.slug);
  if (!post) {
    return <Message title='404 - Not Found' />;
  }
  return (
    <>
      <Root classes='grid items-center justify-center rounded-lg px-5 py-14'>
        <div className='max-w-3xl overflow-auto'>
          <p className='md:text-6xl sm:text-5xl text-4xl font-bold'>{post.title}</p>
          <TagList tags={post.tags} />
          <article className='mdx-root prose mt-8 lg:prose-xl'>
            {/* @ts-expect-error */}
            <MDXRemote source={post.body} options={options} />
          </article>
        </div>
      </Root>
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


// metaData
export async function generateMetadata(
  { params }: Props
): Promise<Metadata>{
    const post = await getDocument(ENVS.APPWRITE.postsID, 'slug', params.slug);
    return{
      title: params.slug,
      description:`${post?.description} | written by Gilbish Kosma.`
    }
}