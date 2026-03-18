import mysql from "mysql2/promise";

// TiDB Cloud connection pool
// Set DATABASE_URL in your .env.local file
// Format: mysql://user:password@host:port/database?ssl={"rejectUnauthorized":true}
let pool: mysql.Pool | null = null;

export function getPool(): mysql.Pool {
  if (!pool) {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error(
        "DATABASE_URL environment variable is not set. " +
        "Please configure it in .env.local or your Vercel project settings."
      );
    }
    pool = mysql.createPool({
      uri: dbUrl,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
      ssl: {
        rejectUnauthorized: true,
      },
    });
  }
  return pool;
}

// Initialize the inquiries table if it doesn't exist
export async function initDB() {
  const db = getPool();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      companyName VARCHAR(255) NOT NULL,
      department VARCHAR(255),
      position VARCHAR(255),
      contactName VARCHAR(255) NOT NULL,
      contactNameKana VARCHAR(255),
      email VARCHAR(320) NOT NULL,
      phone VARCHAR(50),
      productName VARCHAR(255),
      message TEXT NOT NULL,
      status ENUM('new', 'read', 'replied') DEFAULT 'new' NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    )
  `);
}
