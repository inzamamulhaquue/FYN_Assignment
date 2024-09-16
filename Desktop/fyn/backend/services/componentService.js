const Component = require('../models/componentModel');

exports.createComponent = async (data) => {
  const component = new Component(data);
  return await component.save();
};
