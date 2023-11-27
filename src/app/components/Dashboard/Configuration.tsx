import React, { useEffect, useState } from 'react';
import { getCountries, CountryProp } from 'whatsapp-country-code';
import {
  CustomInput,
  CustomSelect,
  ErrorMessage,
  InputWithSelect,
} from '../Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StateProp } from '@/interfaces';

const ContextInfo: React.FC = () => (
  <span
    className='tooltip text-lg'
    data-tip='If 0 then only prompt will be passed to the api, if 1 : prompt + 1 previous message, if 2: prompt + 2previous messages '
  >
    {' '}
    💡
  </span>
);

const initialState = {
  phoneCode: { value: 'IN +91', label: 'IN +91' },
  phoneNumber: '',
  apiKey: '',
  model: 'gpt-3.5-turbo-1106',
  maxToken: 250,
  contextLength: 0,
};

const Configuration = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StateProp>({
    defaultValues: initialState,
  });
  console.log(errors);
  const handleForm: SubmitHandler<StateProp> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className='flex justify-center'>
        <form
          className='card w-full max-w-lg p-5 shadow-md'
          onSubmit={handleSubmit(handleForm)}
        >
          <InputWithSelect
            title='Whatsapp Number'
            placeholder='Enter your whatsapp number'
            options={getCountries().map((item: CountryProp) => ({
              value: `${item.iso_alpha_2_code} ${item.code}`,
              label: `${item.iso_alpha_2_code} ${item.code}`,
            }))}
            extendInputClass='input-sm'
            control={control}
            registerInput={{ ...register('phoneNumber', { required: true }) }}
          />
          {errors.phoneNumber && (
            <ErrorMessage message={errors.phoneNumber.message} />
          )}

          <CustomInput
            title='ApiKey'
            placeholder='paste your openai apikey'
            extendClass='input-sm'
            rootClass='mt-4'
            register={{ ...register('apiKey', { required: true }) }}
          />
          {errors.apiKey && <ErrorMessage message={errors.apiKey.message} />}

          <CustomSelect
            title='Select the model'
            options={['gpt-3.5-turbo-1106', 'gpt-4']}
            rootClass='mt-4'
            extendClass='select-sm'
            register={{ ...register('model', { required: true }) }}
          />
          {errors.model && <ErrorMessage message={errors.model.message} />}

          <CustomInput
            title='Max Token'
            placeholder='Enter the max token to be used'
            extendClass='input-sm'
            rootClass='mt-4'
            register={{ ...register('maxToken', { required: true }) }}
          />
          {errors.maxToken && (
            <ErrorMessage message={errors.maxToken.message} />
          )}

          <CustomInput
            title={'Old context length to be passed in the api '}
            info={<ContextInfo />}
            placeholder='Enter the count of old context to be passed'
            extendClass='input-sm'
            rootClass='mt-4'
            register={{ ...register('contextLength', { required: true }) }}
          />
          {errors.contextLength && (
            <ErrorMessage message={errors.contextLength.message} />
          )}

          <button className='btn btn-neutral btn-active mt-5'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Configuration;
