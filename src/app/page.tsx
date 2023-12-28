import { getDocumentList } from '@/appwrite';
import { postProp } from '@/interfaces';

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
