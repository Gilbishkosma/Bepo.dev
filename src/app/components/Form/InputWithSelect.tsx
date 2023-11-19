import { StateProp } from '@/interfaces';
import React, { ReactElement } from 'react';
import { Control, Controller } from 'react-hook-form';
import Select from 'react-select';

interface inputProp {
  title: string;
  extendInputClass?: string;
  options: any;
  type?: string;
  placeholder?: string;
  registerInput: any;
  control: Control<StateProp, any>;
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    height: '20px',
    minHeight: '33px',
    fontSize: '12px',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    overflow: 'visible', // Make sure the content overflows if necessary
  }),
  menu: (provided: any) => ({
    ...provided,
    minWidth: '150px',
  }),
};

const InputWithSelect: React.FC<inputProp> = ({
  type = 'text',
  placeholder = 'Enter the details',
  title,
  extendInputClass,
  options,
  registerInput,
  control,
}) => {
  return (
    <>
      <label className='label'>
        <span className='label-text'>{title}</span>
      </label>
      <div className='flex'>
        <div className='flex-grow'>
          <Controller
            name='phoneCode'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={options}
                styles={customStyles}
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
              />
            )}
          />
        </div>
        <input
          className={`focus:shadow-outline input input-bordered w-full appearance-none rounded-l-none border border-l-0 px-3 py-1 leading-tight focus:outline-none ${
            extendInputClass || ''
          }`}
          type={type}
          placeholder={placeholder}
          {...registerInput}
        />
      </div>
    </>
  );
};

export default InputWithSelect;
