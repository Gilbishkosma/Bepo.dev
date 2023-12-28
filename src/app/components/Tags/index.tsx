import { tagsProp } from '@/interfaces';
import TagButton from './TagButton';
import { getDocumentList } from '@/appwrite';
import ENVS from '@/config';
import TagList from './TagList';

const Tags = async ({ title }: tagsProp) => {
  const tags = await getDocumentList(ENVS.APPWRITE.tagsID);
  return (
    <div className='p-0 sm:p-5'>
      <p className='font-sans text-xl font-medium text-pink-400'>{title}</p>
      <TagList tags={tags} />
    </div>
  );
};

export default Tags;
