const AppWrite = {
  projectID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '',
  dbID: process.env.NEXT_PUBLIC_APPWRITE_DB_ID || '',
  postsID: process.env.NEXT_PUBLIC_APPWRITE_POSTS_ID || '',
  tagsID: process.env.NEXT_PUBLIC_APPWRITE_TAGS_ID || '',
  authorID: process.env.NEXT_PUBLIC_APPWRITE_AUTHORS_ID || '',
};

export default {
  APPWRITE: AppWrite,
};
