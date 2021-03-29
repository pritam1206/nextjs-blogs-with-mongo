import { MongoClient } from 'mongodb'
async function handler(req, res) {
  console.log(req.body)
  if (req.method === 'POST') {
    const { email, name, message } = req.body
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      message.trim() === '' ||
      !message
    ) {
      res.status(422).json({ message: ' Invalid Input' })
    }
    // Store in db
    const newMessage = {
      email,
      name,
      message,
    }
    console.log(newMessage)

    // mongodb_database: 'myblog',
    let client
    const connectString = `mongodb+srv://${process.env.mongodbuserName}:${process.env.mongodb_password}@${process.env.mongodb_cluster}wmiv.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    try {
      //   client = await MongoClient.connect(
      //     'mongodb+srv://mongo:2GYmU36sKkQTROOz@cluster0.5wmiv.mongodb.net/myblog?retryWrites=true&w=majority',
      //   )
      client = await MongoClient.connect(connectString)
    } catch (error) {
      res.status(500).json({ message: ' coud not coonect data base!' })
    }
    const db = client.db()
    try {
      const result = db.collection('massages').insertOne(newMessage)
      res.status(201).json({ message: ' successfully stored in data base!' })
      client.close()
      return result
    } catch (error) {
      client.close()
      console.log('error', error)
      res.status(401).json({ message: ' storing Failed!' })
      return error
    }
  }
}
export default handler
