const IssueService = require('../services/issueService');

exports.addIssue = async (req, res) => {
  try {
    const issue = await IssueService.createIssue(req.params.vehicle_id, req.body);
    res.status(201).json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.calculateFinalPrice = async (req, res) => {
  try {
    const finalPrice = await IssueService.calculateFinalPrice(req.params.vehicle_id);
    res.json({ finalPrice });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
