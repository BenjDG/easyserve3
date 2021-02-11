// Requiring path to so we can use relative routes to our HTML files
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require('path');
const router = require('express').Router();

// ===============================================================================
// ROUTING
// ===============================================================================

// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
// ---------------------------------------------------------------------------

router.get('/', (_req, res) => {
  console.log(path.join(__dirname, '../../public/html/views', 'home.html'));
  res.sendFile(path.join(__dirname, '../../public/html/views', 'home.html'));
});

router.get('/table1', (_req, res) => {
  console.log('Table 1 - GET');
  res.sendFile(path.join(__dirname, '../../public/html/views', 'table1.html'));
});

router.get('/table2', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/html/views', 'table2.html'));
});

router.get('/table3', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/html/views', 'table3.html'));
});

router.get('/table4', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/html/views', 'table4.html'));
});

router.get('/table5', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/html/views', 'table5.html'));
});

router.get('/table6', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/html/views', 'table6.html'));
});

module.exports = router;
