import { Request, Response } from 'express';
import storageService from '../services/storage.service';

class StorageController {
  async getAll(req: Request, res: Response) {
    try {
      const storages = await storageService.getAllStorages();
      res.status(200).json({
        success: true,
        data: storages,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Internal server error',
      });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const storage = await storageService.getStorageById(id);
      res.status(200).json({
        success: true,
        data: storage,
      });
    } catch (error: any) {
      const statusCode = error.message === 'Storage not found' ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        message: error.message || 'Internal server error',
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const storage = await storageService.createStorage(req.body);
      res.status(201).json({
        success: true,
        data: storage,
        message: 'Storage created successfully',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Bad request',
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const storage = await storageService.updateStorage(id, req.body);
      res.status(200).json({
        success: true,
        data: storage,
        message: 'Storage updated successfully',
      });
    } catch (error: any) {
      const statusCode = error.message === 'Storage not found' ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        message: error.message || 'Bad request',
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await storageService.deleteStorage(id);
      res.status(200).json({
        success: true,
        message: 'Storage deleted successfully',
      });
    } catch (error: any) {
      const statusCode = error.message === 'Storage not found' ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        message: error.message || 'Internal server error',
      });
    }
  }
}

export default new StorageController();
