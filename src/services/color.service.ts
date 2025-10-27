import colorRepository, { CreateColorDto, UpdateColorDto } from '../repositories/color.repository';

class ColorService {
  async getAllColors() {
    return await colorRepository.findAll();
  }

  async getColorById(id: string) {
    const color = await colorRepository.findById(id);
    if (!color) {
      throw new Error('Color not found');
    }
    return color;
  }

  async createColor(data: CreateColorDto) {
    // Check if color name already exists
    const existingColor = await colorRepository.findByName(data.name);
    if (existingColor) {
      throw new Error('Color with this name already exists');
    }
    return await colorRepository.create(data);
  }

  async updateColor(id: string, data: UpdateColorDto) {
    const color = await colorRepository.findById(id);
    if (!color) {
      throw new Error('Color not found');
    }

    // Check if updating name and if it conflicts with existing color
    if (data.name && data.name !== color.name) {
      const existingColor = await colorRepository.findByName(data.name);
      if (existingColor) {
        throw new Error('Color with this name already exists');
      }
    }

    return await colorRepository.update(id, data);
  }

  async deleteColor(id: string) {
    const color = await colorRepository.findById(id);
    if (!color) {
      throw new Error('Color not found');
    }
    return await colorRepository.delete(id);
  }
}

export default new ColorService();
