const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({

    })
        .then(dbPostdata => {
            const posts = dbPostdata.map(post => post.get({ plain: true }));

            res.render('homepage', {
                posts
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostdata => {
            if (!dbPostdata) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostdata.get({ plain: true });

            res.render('single-post', {
                post
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;

