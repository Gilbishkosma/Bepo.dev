import { PostList, Root, Message } from '@/app/components';
import { getDocumentList, getDocument } from '@/appwrite';
import type { Metadata } from 'next'
import ENVS from '@/config';

interface Props{
   params: {
    slug: string
   }
}

const TagRelatedPosts = async ({ params }: Props) => {
  const tagData = await getDocument(ENVS.APPWRITE.tagsID, 'title', params.slug);
  if (!tagData) {
    return <Message title='404 - Not Found' />;
  }
  return (
    <>
      <Root classes='flex flex-col items-center'>
        <p className='mb-2 mt-5 max-w-4xl bg-gradient-to-br from-red-300 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent sm:mb-5 sm:mt-10 md:text-7xl'>
          {params.slug}
        </p>
        <PostList data={tagData.posts} />
      </Root>
    </>
  );
};

export async function generateStaticParams() {
  const tags = await getDocumentList(ENVS.APPWRITE.tagsID);

  return tags.map((tag) => ({
    slug: tag.title,
  }));
}

export default TagRelatedPosts;

// metaData
export async function generateMetadata(
  { params }: Props
): Promise<Metadata>{
    return{
      title:params.slug,
      description:`List of articles written about ${params.slug} | articles written by Gilbish Kosma.`
    }
}
