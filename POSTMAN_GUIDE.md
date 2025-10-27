# Postman Testing Guide

## Base URL
```
http://localhost:3000/api
```

## Storage API Endpoints

### 1. Get All Storages
- **Method**: GET
- **URL**: `http://localhost:3000/api/storages`
- **Response**:
```json
{
  "success": true,
  "data": [...]
}
```

### 2. Get Storage by ID
- **Method**: GET
- **URL**: `http://localhost:3000/api/storages/:id`
- **Example**: `http://localhost:3000/api/storages/123e4567-e89b-12d3-a456-426614174000`

### 3. Create Storage
- **Method**: POST
- **URL**: `http://localhost:3000/api/storages`
- **Headers**: 
  - Content-Type: application/json
- **Body** (raw JSON):
```json
{
  "name": "Main Warehouse",
  "capacity": 10000,
  "description": "Primary storage facility",
  "status": "ACTIVE"
}
```

### 4. Update Storage
- **Method**: PUT
- **URL**: `http://localhost:3000/api/storages/:id`
- **Headers**: 
  - Content-Type: application/json
- **Body** (raw JSON):
```json
{
  "name": "Updated Warehouse",
  "capacity": 15000,
  "description": "Updated description",
  "status": "INACTIVE"
}
```

### 5. Delete Storage
- **Method**: DELETE
- **URL**: `http://localhost:3000/api/storages/:id`

---

## Color API Endpoints

### 1. Get All Colors
- **Method**: GET
- **URL**: `http://localhost:3000/api/colors`

### 2. Get Color by ID
- **Method**: GET
- **URL**: `http://localhost:3000/api/colors/:id`

### 3. Create Color
- **Method**: POST
- **URL**: `http://localhost:3000/api/colors`
- **Headers**: 
  - Content-Type: application/json
- **Body** (raw JSON):
```json
{
  "name": "Red",
  "hexCode": "#FF0000",
  "status": "ACTIVE"
}
```

### 4. Update Color
- **Method**: PUT
- **URL**: `http://localhost:3000/api/colors/:id`
- **Headers**: 
  - Content-Type: application/json
- **Body** (raw JSON):
```json
{
  "name": "Dark Red",
  "hexCode": "#8B0000",
  "status": "ACTIVE"
}
```

### 5. Delete Color
- **Method**: DELETE
- **URL**: `http://localhost:3000/api/colors/:id`

---

## Status Values
- `ACTIVE`
- `INACTIVE`

## Testing Steps

1. **Start the server**:
   ```bash
   yarn install
   yarn dev
   ```

2. **Open Postman**

3. **Test Create Storage**:
   - Create a new request
   - Set method to POST
   - URL: `http://localhost:3000/api/storages`
   - Go to Body → raw → JSON
   - Paste the create storage JSON
   - Click Send

4. **Test Get All Storages**:
   - Create a new request
   - Set method to GET
   - URL: `http://localhost:3000/api/storages`
   - Click Send

5. **Repeat for Colors API**

## Common Response Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error
