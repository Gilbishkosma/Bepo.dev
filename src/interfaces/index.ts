import type { Models } from 'appwrite';
import React from 'react';

export interface childrenNode {
  children: React.ReactNode;
}

export interface styleProp {
  className?: string;
  style?: any;
}

export interface tagsProp extends Models.Document {
  title: string;
}

export interface postProp extends Models.Document {
  title: string;
  body: string;
  views: number;
  is_published: boolean;
  description: string;
  tags: tagsProp[];
  slug: string;
}

export interface defaultProp {
  classes?: string;
  children?: React.ReactNode;
}
