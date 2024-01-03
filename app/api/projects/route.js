import{ connectToDB} from "@/utils/connecttodb";
import { client } from '@/utils/connecttodb';

export const GET= async (req, res) => {
    try {
        await connectToDB()
        const dbName = 'Portfolio';
        const collectionName = 'projects';
        
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const projects = await collection.find({}).toArray(); // Convert cursor to array
// console.log(JSON.stringify(projects))
        return new Response(JSON.stringify(projects),{status:200})
    } catch (error) {
        console.log(error)
        return new Response({err:"failed to fetch projects"},{status:500})
    }
};
