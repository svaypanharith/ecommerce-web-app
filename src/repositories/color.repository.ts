import prisma from '../config/database';
import { Status } from '../../generated/prisma';

export interface CreateColorDto {
  name: string;
  hexCode?: string;
  status?: Status;
}

export interface UpdateColorDto {
  name?: string;
  hexCode?: string;
  status?: Status;
}

class ColorRepository {
  async findAll() {
    return await prisma.color.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    return await prisma.color.findUnique({
      where: { id },
    });
  }

  async findByName(name: string) {
    return await prisma.color.findUnique({
      where: { name },
    });
  }

  async create(data: CreateColorDto) {
    return await prisma.color.create({
      data,
    });
  }

  async update(id: string, data: UpdateColorDto) {
    return await prisma.color.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await prisma.color.delete({
      where: { id },
    });
  }
}

export default new ColorRepository();
