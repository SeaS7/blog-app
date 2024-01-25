/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        appwriteUrl : String(process.env.NEXT_PUBLIC_APPWRITE_URL),
        appwriteProjectId : String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
        appwriteDataBaseId : String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
        appwriteCollectionId : String(process.env.NEXT_PUBLIC_COLLECTION_ID),
        appwriteBucketId : String(process.env.NEXT_PUBLIC_BUCKET_ID),
    }
};

export default nextConfig;
