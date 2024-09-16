const Issue = require('../models/issueModel');
const Component = require('../models/componentModel');

exports.createIssue = async (vehicle_id, data) => {
  const { component_id, repair_or_new, price } = data;
  const issue = new Issue({ vehicle_id, component_id, repair_or_new, price });
  return await issue.save();
};

exports.calculateFinalPrice = async (vehicle_id) => {
  const issues = await Issue.find({ vehicle_id });
  let finalPrice = 0;
  issues.forEach(issue => finalPrice += issue.price);
  return finalPrice;
};
