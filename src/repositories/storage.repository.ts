import prisma from '../config/database';
import { Status } from '../../generated/prisma';

export interface CreateStorageDto {
  name: string;
  capacity: number;
  description: string;
  status?: Status;
}

export interface UpdateStorageDto {
  name?: string;
  capacity?: number;
  description?: string;
  status?: Status;
}

class StorageRepository {
  async findAll() {
    return await prisma.storage.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    return await prisma.storage.findUnique({
      where: { id },
    });
  }

  async create(data: CreateStorageDto) {
    return await prisma.storage.create({
      data,
    });
  }

  async update(id: string, data: UpdateStorageDto) {
    return await prisma.storage.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await prisma.storage.delete({
      where: { id },
    });
  }
}

export default new StorageRepository();
