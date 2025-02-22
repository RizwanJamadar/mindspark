const saveToIndexedDB = async (historyItem) => {
    try {
        // initialize
        const db = await openDB()

        // create indexDB
        const tx = db.transaction("quizHistory", "readwrite")

        // create store 
        const store = tx.objectStore("quizHistory")

        // if available Save Quiz History to IndexedDB
        await store.add(historyItem)
    } catch (error) {
        console.error("Error saving to IndexedDB:", error)
    }
}

const openDB = () => {
    return new Promise((resolve, reject) => {
        // Open IndexedDB 
        const request = indexedDB.open("QuizDB", 1);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);

        // Create Object Store
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("quizHistory")) {
                db.createObjectStore("quizHistory", { keyPath: "id", autoIncrement: true });
            }
        };
    });
};

export default saveToIndexedDB;