import { Databases, Query } from 'appwrite';
import client from './client';
import { postProp } from '@/interfaces';
import ENVS from '../config';

const database = new Databases(client);

export const getDocumentList = async (collectionId: string) => {
  let promise = await database.listDocuments<postProp>(
    ENVS.APPWRITE.dbID,
    collectionId
  );
  return promise.documents;
};

export const getDocument = async (
  collectionId: string,
  field: string,
  value: string
) => {
  let promise = await database.listDocuments<postProp>(
    ENVS.APPWRITE.dbID,
    collectionId,
    [Query.equal(field, value)]
  );
  return promise.documents[0];
};
