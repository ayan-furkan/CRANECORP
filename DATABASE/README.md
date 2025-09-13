# 🗄️ Database Module - CraneCorp Backend API

RESTful API server built with Node.js and Express, featuring SQLite database integration for port management operations.

## 🚀 Features

- RESTful API endpoints
- SQLite database with persistent storage
- CORS support for cross-origin requests
- Environment variable configuration
- Real-time data processing

## 📋 Prerequisites

- Node.js (v14.0 or higher)
- npm (Node Package Manager)

## ⚡ Quick Start

### 1. Navigate to Database Directory
```bash
cd DATABASE
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
node server.js
```

The server will start on **port 3000** by default.

## 📡 API Endpoints

The server provides endpoints for:
- Equipment monitoring
- Data logging
- Status updates
- Configuration management

## 🗃️ Database Schema

The SQLite database (`cranecorp.db`) contains tables for:
- Equipment status
- User sessions
- Operation logs
- System configurations

## 🛠️ Development

### Project Structure
```
DATABASE/
├── server.js          # Main server file
├── db.js             # Database connection
├── queryHandler.js   # Database queries
├── cranecorp.db      # SQLite database
└── package.json      # Dependencies
```

### Environment Variables
Create a `.env` file for configuration:
```env
PORT=3000
DATABASE_PATH=./cranecorp.db
```

## 📊 Dependencies

- **express**: Web framework
- **sqlite3**: Database driver
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variables
- **mysql**: MySQL support (if needed)

## 🔧 Troubleshooting

- Ensure Node.js is properly installed
- Check that port 3000 is available
- Verify SQLite database permissions

For more details, see the main [project documentation](../README.md).
