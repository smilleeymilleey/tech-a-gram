const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
const  getImgurUrl  = require('../controllers/imgur/api.js')

router.get('/', async (req, res) => {
  try {
    // Get all Post and JOIN with user data
    console.log("hello world")
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const allPost = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 

      posts:allPost, 

      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.get('/Post/:id', async (req, res) => {
  try {
    const PostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const pd = PostData.get({ plain: true });

    res.render('Post', {
      ...pd,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    const {data:images} = await getImgurUrl()

    console.log(images);
    res.render('profile', {
      ...user,
      images,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
