'use server';

import {auth, firebaseDb} from "@/firebase";
import {signInWithEmailAndPassword, signOut, UserCredential} from "firebase/auth";
import {collection, getDocs} from "firebase/firestore/lite";

type LoginInfo = {
    email: string;
    password: string;
}

const formatAdmin = (admin: UserCredential) => ({
    email: admin?.user.email,
    displayName: admin?.user?.displayName,
    emailVerified: admin?.user?.emailVerified
})
export async function customSignIn({email, password}: LoginInfo) {
    return signInWithEmailAndPassword(auth, email, password)
        .then(admin => {
            return {
                data: formatAdmin(admin),
                success: true
            };
        })
        .catch(error => {
            return {
                data: error?.message || 'Something went wrong..',
                success: false
            }
        });
}

export async function customLogOut() {
    return signOut(auth)
        .then(res => {
            console.info('res => ', res);
        }).catch(error => {
            console.info('error => ', error.message);
        })
}

export async function fetchSuperAdmin(storeId: string) {
    const adminsCollection =
        await collection(firebaseDb, 'admins');
    const adminsSnapshot = await getDocs(adminsCollection);
    return adminsSnapshot.docs.map(doc => doc.data());
}
