const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Function to determine the environment and set the PORT accordingly
const determinePort = () => {
  const defaultPort = 5050; // Change the default port to 5050 for local development
  const ec2Port = 8080; // Use 8080 instead of 80 to avoid needing sudo
  const isEC2 = !!process.env.EC2_HOME || fs.existsSync('/sys/hypervisor/uuid');
  
  return isEC2 ? ec2Port : defaultPort;
};

const PORT = determinePort();

// Serve static files from the "public" directory in the frontend folder
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
