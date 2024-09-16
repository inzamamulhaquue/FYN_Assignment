const ComponentService = require('../services/componentService');

exports.registerComponent = async (req, res) => {
  try {
    const component = await ComponentService.createComponent(req.body);
    res.status(201).json(component);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
