import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, query, onSnapshot, orderBy, where } from 'firebase/firestore'

export const useFetchDocuments = (docCollection, search = null, parameter = null) => {

    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // Deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {
        async function loadData() {
            if(cancelled) {
                return 
            }

            setLoading(true)

            const collectionRef = await collection(db, docCollection);

            try {
                let q
                if(search && !parameter) {
                    q = await query(
                        collectionRef, 
                        where("name", "array-contains", search),
                        orderBy('type', 'asc')
                    )
                } else if(parameter) {
                    q = await query(
                        collectionRef,
                        where(parameter, '==', search)
                    )
                } else {
                    q = await query(collectionRef, orderBy('type', 'asc'))
                }

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                })
                
            } catch (error) {
                console.log(error)
                setError(error.message)
            }
            setLoading(false)
        }
        loadData()
    },[docCollection, cancelled, search, parameter])

    useEffect(() => {
        return () => setCancelled(true);
      }, []);

    return { documents, loading, error }
}