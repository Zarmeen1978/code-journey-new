import {
    ID, Account, Client, Avatars, Databases,
    Query, Storage
} from 'react-native-appwrite'

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.codie.codejourney',
    projectId: '668cf6e3001570ed1fe7',
    databaseId: '668cf9a60024e6c14d45',
    userCollectionId: '668cf9eb0032ff3a9a08',
    lectureCollectionId: '668cfa31001493ea4732',
    storageId: '668cfe33002f4faaa96c'
}
const client = new Client();
client
    .setEndpoint(config.endpoint) //Appwrite endpoint
    .setProject(config.projectId) //Project ID
    .setPlatform(config.platform);

{/*Creating the first user */ }

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client)
//Register User
// export async function createUser(email, password, username) {
//     try {
//         const newAccount = await account.create(
//             ID.unique(),
//             email,
//             password,
//             username,
//         )
//         if (!newAccount) throw Error;

//         const avatarUrl = avatars.getInitials(username)
//         await signIn(email, password)

//         const newUser = await databases.createDocument(
//             config.databaseId,
//             config.userCollectionId,
//             // config.lectureCollectionId,
//             ID.unique(),
//             { //I just change the comment from down
//                 accountId: newAccount.$id,
//                 email: email,
//                 username: username,
//                 avatars: avatarUrl,
//             }
//         )
//         return newUser;
//     } catch (error) {
//         console.log(error)
//         throw new Error(error)
//     }

//}

export const  signIn= async(email, password)=> {
    try {
        // Check if there is an existing session
        const currentSession = await account.getSession("current");

        if (currentSession) {
            // Return the current session if already active
            return currentSession;
        }

        // Create a new session if none exists
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        // Handle the specific error for active session
        if (error.message.includes("Creation of a session is prohibited when a session is active")) {
            // Return the current session if already active
            const currentSession = await account.getSession("current");
            return currentSession;
        } else {
            throw new Error(error.message);
        }
    }
}

export const  createUser= async(email, password, username)=> {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username,
        );
        if (!newAccount) throw new Error('Failed to create account');

       const avatarUrl = avatars.getInitials(username);
        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
               username: username,
              // avatars: avatarUrl,
            }
        );
        return newUser;
    } catch (error) {
        if (error.message.includes("not authorized")) {
            console.error("User is not authorized. Please check permissions.");
        } else {
            console.error(error);
        }
        throw new Error(error.message);
    }
}


// export async function signIn(email, password) {
//     try {
//         // Check if there is an existing session
//         // const currentSession = await account.get();

//         // if (currentSession) {
//         //     // Handle existing session if needed
//         //     return currentSession;
//         // }

//         // Create a new session if none exists
//         const session = await account.createEmailPasswordSession(email, password);
//         return session;
//     } catch (error) {
//         // Handle the specific error for active session
//         // if (error.message.includes("Creation of a session is prohibited when a session is active")) {
//         //     // Return the current session if already active
//         //     const currentSession = await account.get();
//         //     return currentSession;
//         // } else {
//         throw new Error(error);
//     }
// }

export async function getAccount() {
    try {
        const currentAccount = await account.get();
        return currentAccount;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async ()=>{
    try {
        const currentAccount = await account.get();
        if(!currentAccount) throw Error;
        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if(!currentUser) throw Error;
        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}
{/* Sign Out */ }
// export async function signOut() {
//     try {
//         const session = await account.deleteSession("current");
//         return session;
//     } catch (error) {
//         throw new Error(error);
//     }
// }
// export async function SignIn(email,password){
//     try {
//        // const session = await account.createEmailPasswordSession(email,password)
//        const session = await account.createAnonymousSession(email,password)
//         return session;
//     } catch (error) {
//         throw new Error(error)
//     }
// }