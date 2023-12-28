import { tagsProp } from '@/interfaces';
import TagButton from './TagButton';

const TagList = ({ tags }: { tags: tagsProp[] }) => {
  return (
    <div className='mt-4 flex max-w-2xl flex-wrap gap-2'>
      {tags.map((item) => (
        <TagButton {...item} key={item.$id} />
      ))}
    </div>
  );
};

export default TagList;
