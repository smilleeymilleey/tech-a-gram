const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post } = require('../models');


router.get('/', withAuth, async (req, res) => {
    try {
      
      const postData = await Post.findAll({
        where: [
          {
            user_id: req.session.user_id
          },
        ],
      });
  
    
      const posts = postData.map((post) => post.get({ plain: true }));
  
     
      res.render('profile', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/profile/:id', async (req, res) => {
    try {
      const postData = await post.findByPk(req.params.id, {
        where: [
          {
            user_id: req.session.user_id
          },
        ],
      });
  
      const posts = postData.get({ plain: true });
  
      res.render('profile', {
       
        ...posts,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });








  module.exports = router;