import React from 'react';

export interface childrenNode {
  children: React.ReactNode;
}

export interface StateProp {
  phoneCode: optionProp;
  phoneNumber: string;
  apiKey: string;
  model: string;
  maxToken: number;
  contextLength: number;
}

interface optionProp {
  label: string;
  value: string;
}
