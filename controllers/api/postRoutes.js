const router = require('express').Router();
const {Post } = require('../../models');
const withAuth = require('../../utils/auth');

//get post
router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      where: [
        {
          model: User,
          attributes: ["description"]
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('profile', {
      
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id)
    const newPosts = await Post.create({
      
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPosts);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const PostsData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!PostsData) {
      res.status(404).json({ message: 'No Posts found with this id!' });
      return;
    }

    res.status(200).json(PostsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
