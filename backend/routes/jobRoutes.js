const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// Post a new job
router.post('/', async (req, res) => {
  const newJob = new Job(req.body);
  try {
    await newJob.save();
    res.status(201).send(newJob);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Search for jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).send(jobs);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Apply for a job (simplified version)
router.post('/:jobId/apply', (req, res) => {
  // Placeholder for application logic
  res.status(200).send({ message: "Applied successfully" });
});

module.exports = router;
