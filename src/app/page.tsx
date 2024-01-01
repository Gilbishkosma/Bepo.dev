import { getDocumentList } from '@/appwrite';
import { postProp } from '@/interfaces';
import type { Metadata } from 'next'

import ENVS from '@/config';
import { PostList, Tags, Root } from '@/app/components';
/**
 * Renders the Home page component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default async function Home() {
  const data: postProp[] = await getDocumentList(ENVS.APPWRITE.postsID);
  return (
    <>
      <Root>
        {/* @ts-expect-error */}
        <Tags title='Search blog by topics' />
        <PostList data={data} />
      </Root>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Bepo.dev | Personal blog of Gilbish Kosma',
  description: `This is the 'Homepage' of Gilbish Kosma's personal blog, i am a software developer who writes 1blog/week, i also have a gallary page where i keep the pics which i like.`
}
