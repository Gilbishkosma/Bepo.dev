interface props {
  date: string;
  classes?: string;
}

const PostDate = ({ date, classes }: props) => {
  return (
    <div className={`h-full border-l-2 border-slate-200 ${classes || ''}`}>
      <p className='p-0 px-2 text-sm font-medium text-slate-400 md:p-5'>
        {date}
      </p>
    </div>
  );
};

export default PostDate;
