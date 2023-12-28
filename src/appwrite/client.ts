import { Client, Databases } from 'appwrite';
import ENVS from '../config';
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(ENVS.APPWRITE.projectID || '');

export default client;
