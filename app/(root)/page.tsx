"use client";
import React, { useEffect, useState } from "react";
import useFirestoreDoc, {
  listenToDocFromFirestore,
} from "../hooks/useFirestoreDoc";
import { Cookies, useCookies } from "react-cookie";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDb } from "@/firebase";
import { fetchCollection } from "@/lib/actions/user.actions";

export default function Home() {
  const [cookies, setCookie] = useCookies();
  const [user, setUser] = useState<any>(null);

  console.log("user in page", user);

  useEffect(() => {
    if (!user && cookies.uid) {
      //   getUser().then(() => console.log("!"));
      fetchCollection(cookies.uid, "Users").then((user) => setUser(user));
    }
  }, [cookies]);

  return (
    <>
      <h1 className="head-text text-left">Home</h1>
    </>
  );
}
