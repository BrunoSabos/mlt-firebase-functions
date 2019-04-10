import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.region('europe-west1').https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
export const translate = functions.region('europe-west1').https.onRequest((req, res) => {
    // const original = req.query.text;
    res.json(
        {data: {response: "bonjour"}}
    )
})
export const getWord = functions.region('europe-west1').https.onRequest((req, res) => {
    // const original = req.query.text;
    const words = ["hello", "world"]
    res.json(
        {data: {word: words[Math.floor(Math.random() * words.length)]}}
    )
})
