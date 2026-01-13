const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Node.js CI/CD Pipeline',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api'
    }
  });
});

// Sample API endpoint
app.get('/api', (req, res) => {
  res.json({ data: 'Sample API response', success: true });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
