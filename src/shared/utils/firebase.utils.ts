import db from '../firebase/firebase.config';
import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  getDocs,
} from 'firebase/firestore';

export const getRepository = (
  repository: string,
): CollectionReference<DocumentData, DocumentData> =>
  collection(db, repository);

export async function findAllDocuments(repository: string) {
  const collection = getRepository(repository);

  const querySnapshot = await getDocs(collection);

  return ResponseOfManyDocuments(querySnapshot);
}

export async function findOneDocument(repository: string, id: string) {
  const collection = getRepository(repository);
  const document = doc(collection, id);

  const querySnapshot = await getDoc(document);

  return ResponseOfOneDocument(querySnapshot);
}

export async function createNewDocument<T>(repository: string, data: T) {
  const collection = getRepository(repository);
  const documentReference = await addDoc(collection, {
    ...data,
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
  });

  return documentReference;
}

export function ResponseOfManyDocuments(querySnapshot: any): DocumentData[] {
  return querySnapshot.docs.map((doc: any) => {
    const { id } = doc;
    return { id, ...doc.data() };
  });
}

export function ResponseOfOneDocument(doc: DocumentData): DocumentData {
  return {
    id: doc.id,
    ...doc.data(),
  };
}
