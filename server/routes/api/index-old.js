const router = require('express').Router();
// Requiring our models and passport as we've configured it
const db = require('../../models');
const passport = require('../../config/passport');

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post('/login', passport.authenticate('local'), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post('/signup', (req, res) => {
  db.User.create(req.body)
    .then(() => {
      res.redirect(307, '/api/login');
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

// Route for getting some data about our user to be used client side
router.get('/user_data', (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    return res.json({});
  }
  // Otherwise send back the user's email and id
  // Sending back a password, even a hashed password, isn't a good idea
  const { password, ...user } = req.user;
  res.json(user);
});

// Add sequelize code to get all food and return them as JSON
router.get('/tables', async (req, res) => {
  const hotdog = await db.Hotdog.findAll({});
  res.json(hotdog);
});
router.post('/tables', async function (req, res) {
  const newTable = await db.Table.create(req.body);
  res.json(newTable);
});

router.delete('/hotDogs/:id', async (req, res) => {
  const option = {
    where: {
      id: req.params.id
    }
  };
  await db.Hotdog.destroy(option);
  res.end();
});

// Add sequelize code to get a specific food and return it as JSON
router.get('/:food', async (req, res) => {
  const selectItem = await db.Table.findOne({
    where: {
      id: req.params.food
    }
  });
  res.json(selectItem);
});

// POST route for saving a food. We can create food with the data in req.body
router.post('/hotDogs', async function (req, res) {
  const newHotDog = await db.Hotdog.create(req.body);
  res.json(newHotDog);
});

module.exports = router;
