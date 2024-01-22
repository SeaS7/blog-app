/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        appwriteUrl : String(process.env.NEXT_APPWRITE_URL),
        appwriteProjectId : String(process.env.NEXT_APPWRITE_PROJECT_ID),
        appwriteDataBaseId : String(process.env.NEXT_APPWRITE_DATABASE_ID),
        appwriteCollectionId : String(process.env.NEXT_COLLECTION_ID),
        appwriteBucketId : String(process.env.NEXT_BUCKET_ID),
    }
};

export default nextConfig;
