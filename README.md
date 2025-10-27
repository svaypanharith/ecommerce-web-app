# E-commerce API

A RESTful API built with Node.js, Express, TypeScript, and Prisma for managing e-commerce resources.

## Features

- ✅ CRUD operations for Storage
- ✅ CRUD operations for Colors
- ✅ PostgreSQL database with Prisma ORM
- ✅ TypeScript for type safety
- ✅ Clean architecture (Repository → Service → Controller)
- ✅ Status management (ACTIVE/INACTIVE)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL

## Project Structure

```
ecommerce-api/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   │   ├── color.controller.ts
│   │   └── storage.controller.ts
│   ├── services/
│   │   ├── color.service.ts
│   │   └── storage.service.ts
│   ├── repositories/
│   │   ├── color.repository.ts
│   │   └── storage.repository.ts
│   ├── routes/
│   │   ├── index.ts
│   │   ├── color.routes.ts
│   │   └── storage.routes.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── package.json
└── tsconfig.json
```

## Installation

1. **Install dependencies**:
   ```bash
   yarn install
   ```

2. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   PORT=3000
   ```

3. **Run Prisma migrations**:
   ```bash
   yarn prisma:migrate
   ```

4. **Generate Prisma Client**:
   ```bash
   yarn prisma:generate
   ```

## Running the Application

### Development Mode
```bash
yarn dev
```

### Production Mode
```bash
yarn build
yarn start
```

### Prisma Studio (Database GUI)
```bash
yarn prisma:studio
```

## API Endpoints

### Storage
- `GET /api/storages` - Get all storages
- `GET /api/storages/:id` - Get storage by ID
- `POST /api/storages` - Create new storage
- `PUT /api/storages/:id` - Update storage
- `DELETE /api/storages/:id` - Delete storage

### Colors
- `GET /api/colors` - Get all colors
- `GET /api/colors/:id` - Get color by ID
- `POST /api/colors` - Create new color
- `PUT /api/colors/:id` - Update color
- `DELETE /api/colors/:id` - Delete color

## Testing with Postman

See [POSTMAN_GUIDE.md](./POSTMAN_GUIDE.md) for detailed testing instructions.

## Available Scripts

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn prisma:generate` - Generate Prisma Client
- `yarn prisma:migrate` - Run database migrations
- `yarn prisma:studio` - Open Prisma Studio

## License

MIT
