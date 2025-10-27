import storageRepository, { CreateStorageDto, UpdateStorageDto } from '../repositories/storage.repository';

class StorageService {
  async getAllStorages() {
    return await storageRepository.findAll();
  }

  async getStorageById(id: string) {
    const storage = await storageRepository.findById(id);
    if (!storage) {
      throw new Error('Storage not found');
    }
    return storage;
  }

  async createStorage(data: CreateStorageDto) {
    return await storageRepository.create(data);
  }

  async updateStorage(id: string, data: UpdateStorageDto) {
    const storage = await storageRepository.findById(id);
    if (!storage) {
      throw new Error('Storage not found');
    }
    return await storageRepository.update(id, data);
  }

  async deleteStorage(id: string) {
    const storage = await storageRepository.findById(id);
    if (!storage) {
      throw new Error('Storage not found');
    }
    return await storageRepository.delete(id);
  }
}

export default new StorageService();
