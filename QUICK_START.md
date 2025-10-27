# Quick Start Guide

## ✅ Setup Complete!

Your API is now running on: **http://localhost:3001**

## 🚀 Testing in Postman

### Option 1: Import Collection (Recommended)
1. Open Postman
2. Click **Import** button (top left)
3. Select **File** tab
4. Choose `Ecommerce-API.postman_collection.json` from this directory
5. Click **Import**

### Option 2: Manual Testing

#### Test 1: Create a Storage
```
Method: POST
URL: http://localhost:3001/api/storages
Headers: Content-Type: application/json
Body (raw JSON):
{
  "name": "Main Warehouse",
  "capacity": 10000,
  "description": "Primary storage facility",
  "status": "ACTIVE"
}
```

#### Test 2: Get All Storages
```
Method: GET
URL: http://localhost:3001/api/storages
```

#### Test 3: Create a Color
```
Method: POST
URL: http://localhost:3001/api/colors
Headers: Content-Type: application/json
Body (raw JSON):
{
  "name": "Red",
  "hexCode": "#FF0000",
  "status": "ACTIVE"
}
```

#### Test 4: Get All Colors
```
Method: GET
URL: http://localhost:3001/api/colors
```

## 📋 Available Endpoints

### Storage API
- `GET    /api/storages` - Get all storages
- `GET    /api/storages/:id` - Get storage by ID
- `POST   /api/storages` - Create storage
- `PUT    /api/storages/:id` - Update storage
- `DELETE /api/storages/:id` - Delete storage

### Color API
- `GET    /api/colors` - Get all colors
- `GET    /api/colors/:id` - Get color by ID
- `POST   /api/colors` - Create color
- `PUT    /api/colors/:id` - Update color
- `DELETE /api/colors/:id` - Delete color

## 🎯 Expected Responses

### Success Response (200/201)
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Response (400/404/500)
```json
{
  "success": false,
  "message": "Error description"
}
```

## 🔧 Useful Commands

```bash
# Start development server
yarn dev

# View database in browser
yarn prisma:studio

# Run migrations
yarn prisma:migrate

# Build for production
yarn build

# Start production server
yarn start
```

## 📊 Database Access

Open Prisma Studio to view your database:
```bash
yarn prisma:studio
```
Then visit: http://localhost:5555

## ⚡ Quick Test Sequence

1. **Health Check**: GET http://localhost:3001/
2. **Create Storage**: POST http://localhost:3001/api/storages (with body)
3. **Get All Storages**: GET http://localhost:3001/api/storages
4. **Create Color**: POST http://localhost:3001/api/colors (with body)
5. **Get All Colors**: GET http://localhost:3001/api/colors

Copy the `id` from responses to test UPDATE and DELETE operations!

## 🎨 Sample Data

### Storage Examples
```json
{
  "name": "Main Warehouse",
  "capacity": 10000,
  "description": "Primary storage",
  "status": "ACTIVE"
}

{
  "name": "Secondary Storage",
  "capacity": 5000,
  "description": "Backup facility",
  "status": "ACTIVE"
}
```

### Color Examples
```json
{ "name": "Red", "hexCode": "#FF0000", "status": "ACTIVE" }
{ "name": "Blue", "hexCode": "#0000FF", "status": "ACTIVE" }
{ "name": "Green", "hexCode": "#00FF00", "status": "ACTIVE" }
{ "name": "Yellow", "hexCode": "#FFFF00", "status": "ACTIVE" }
{ "name": "Black", "hexCode": "#000000", "status": "ACTIVE" }
```

Happy Testing! 🎉
