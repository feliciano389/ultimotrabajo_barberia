const Service = require('../models/Service');

// Obtener todos los servicios
async function getAllServices(req, res) {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los servicios.' });
  }
}

// Obtener un servicio por ID
async function getServiceById(req, res) {
  const { id } = req.params;
  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ error: 'Servicio no encontrado.' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el servicio.' });
  }
}

// Crear un nuevo servicio
async function createService(req, res) {
  const { serviceName, description, price, estado } = req.body;
  try {
    const service = new Service({ serviceName, description, price, estado });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el servicio.' });
  }
}

// Actualizar un servicio por ID
async function updateService(req, res) {
  const { id } = req.params;
  const { serviceName, description, price, estado } = req.body;
  try {
    const service = await Service.findByIdAndUpdate(id, { serviceName, description, price, estado }, { new: true });
    if (!service) {
      return res.status(404).json({ error: 'Servicio no encontrado.' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el servicio.' });
  }
}

// Eliminar un servicio por ID
async function deleteService(req, res) {
  const { id } = req.params;
  try {
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return res.status(404).json({ error: 'Servicio no encontrado.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el servicio.' });
  }
}

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
