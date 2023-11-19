import { StateProp } from '@/interfaces';
import React, { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface inputPrope {
  title: string;
  info?: ReactElement;
  type?: string;
  placeholder?: string;
  extendClass?: string;
  rootClass?: string;
  register: any;
}

const CustomInput: React.FC<inputPrope> = ({
  type = 'text',
  placeholder = 'Enter the details',
  info: InfoComponent,
  title,
  extendClass,
  rootClass,
  register,
}) => {
  return (
    <div className={`form-control w-full ${rootClass || ''}`}>
      <label className='label'>
        <span className='label-text'>
          {title} {InfoComponent}
        </span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full ${extendClass || ''}`}
        {...register}
      />
    </div>
  );
};

export default CustomInput;
