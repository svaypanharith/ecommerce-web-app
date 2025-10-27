import { Request, Response } from 'express';
import colorService from '../services/color.service';

class ColorController {
  async getAll(req: Request, res: Response) {
    try {
      const colors = await colorService.getAllColors();
      res.status(200).json({
        success: true,
        data: colors,
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
      const color = await colorService.getColorById(id);
      res.status(200).json({
        success: true,
        data: color,
      });
    } catch (error: any) {
      const statusCode = error.message === 'Color not found' ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        message: error.message || 'Internal server error',
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const color = await colorService.createColor(req.body);
      res.status(201).json({
        success: true,
        data: color,
        message: 'Color created successfully',
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
      const color = await colorService.updateColor(id, req.body);
      res.status(200).json({
        success: true,
        data: color,
        message: 'Color updated successfully',
      });
    } catch (error: any) {
      const statusCode = error.message === 'Color not found' ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        message: error.message || 'Bad request',
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await colorService.deleteColor(id);
      res.status(200).json({
        success: true,
        message: 'Color deleted successfully',
      });
    } catch (error: any) {
      const statusCode = error.message === 'Color not found' ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        message: error.message || 'Internal server error',
      });
    }
  }
}

export default new ColorController();
