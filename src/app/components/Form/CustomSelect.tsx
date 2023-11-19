import React, { ReactElement } from 'react';

interface inputPrope {
  title: string;
  info?: ReactElement;
  extendClass?: string;
  rootClass?: string;
  options: string[];
  register?: any;
}

const CustomSelect: React.FC<inputPrope> = ({
  info: InfoComponent,
  title,
  extendClass,
  rootClass,
  options,
  register,
}) => {
  return (
    <div className={`form-control w-full ${rootClass || ''}`}>
      <label className='label'>
        <span className='label-text'>
          {title} {InfoComponent}
        </span>
      </label>
      <select
        className={`select select-bordered  ${extendClass || ''}`}
        {...register}
      >
        {options.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
