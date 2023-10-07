import { useEffect, DependencyList } from "react";
import {
  doc,
  onSnapshot,
  DocumentSnapshot,
  DocumentData,
} from "@firebase/firestore";
import { Timestamp, getFirestore } from "firebase/firestore";
import { firebaseDb } from "@/firebase";

export function dataFromSnapshot(
  snapshot: DocumentSnapshot,
  timestamp: boolean = false
) {
  if (!snapshot.exists) return undefined;
  let data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (!timestamp && data[prop] instanceof Timestamp) {
        data[prop] = data[prop].toDate();
      } else if (timestamp && data[prop] instanceof Timestamp) {
        data[prop] = data[prop].toDate().getTime();
      }
    }
  }

  return {
    id: snapshot.id,
  };
}

export type UseFirestoreDocArgs = {
  query: () => any;
  data: any;
  deps: DependencyList;
  shouldExecute: boolean;
  returnIfEmpty?: boolean;
  customErrorMessage?: string;
  queryCode?: number;
  id?: string;
  params?: string;
  debug?: string;
};

export function listenToDocFromFirestore({
  dbCollection,
  id,
}: {
  dbCollection: string;
  id?: string | null;
}) {
  if (!id) return;
  console.log("listento", dbCollection, id);
  return doc(firebaseDb, dbCollection, id);
}

export default function useFirestoreDoc({
  query,
  data,
  deps,
  shouldExecute = true,
  returnIfEmpty = false,
  debug,
}: UseFirestoreDocArgs) {
  useEffect(() => {
    if (!shouldExecute) return;
    if (debug) {
      console.log(debug);
    }
    const unsubscribe = onSnapshot(
      query(),
      (snapshot: DocumentSnapshot<DocumentData>) => {
        if (!snapshot.exists) {
          if (returnIfEmpty) return;
          return;
        }
        data(dataFromSnapshot(snapshot));
      },
      async (error) => {
        if (returnIfEmpty) return;
      }
    );
    return () => {
      unsubscribe();
      // dispatch(asyncActionFinish());
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
