interface skillProp {
  title: string;
  value: string;
  info?: string;
  imgURL: string;
}

const SkillCard = ({ title, value, info, imgURL }: skillProp) => {
  return (
    <>
      <div className='stats shadow transition-all hover:-translate-y-2 hover:cursor-pointer hover:bg-slate-100'>
        <div className='stat p-3'>
          <div className='stat-figure text-secondary'>
            <div className='avatar'>
              <div className='w-8 rounded-full  md:w-16'>
                <img src={imgURL} className='!mt-0' alt={title} />
              </div>
            </div>
          </div>
          <div className='stat-value text-lg text-slate-700 md:text-2xl'>
            {title}
          </div>
          <div className='stat-title text-base md:text-lg'>{value}</div>

          <div className='stat-desc text-green-700'>{info}</div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
