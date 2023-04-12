import mongoose, { Connection } from 'mongoose';

interface ConnectionObject {
  isConnected: boolean;
  connection: Connection | null;
}

const connection: ConnectionObject = {
  isConnected: false,
  connection: null
};

async function dbConnection(): Promise<void> {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  connection.isConnected = db.connections[0].readyState === 1;
  connection.connection = db.connection;
}

export default dbConnection;
