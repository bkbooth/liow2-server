var _ = require('lodash'),
    express = require('express'),
    router = express.Router(),
    route = require('../utils/route');

var ObjectId = require('mongoose').Types.ObjectId,
    Act = require('../models/Act'),
    Like = require('../models/Like'),
    Comment = require('../models/Comment');

/**
 * @apiDefine NoContentSuccess
 *
 * @apiSuccessExample Response
 *   HTTP/1.1 204 No Content
 */

router.param('act', route.paramHandler.bind(Act));
router.param('like', route.paramHandler.bind(Like));
router.param('comment', route.paramHandler.bind(Comment));

/**
 * @api {get} /acts List acts
 * @apiName GetActs
 * @apiGroup Acts
 *
 * @apiUse GetActsSuccess
 */
router.get('/', route.getAll.bind(Act));

/**
 * @api {post} /acts Create act
 * @apiName PostActs
 * @apiGroup Acts
 *
 * @apiUse CreateActSuccess
 */
router.post('/', (req, res, next) => {
  req.body = _.pick(req.body, Act.getFilter());
  req.body.user = ObjectId.isValid(req.body.user) ? ObjectId(req.body.user) : null;
  req.body.group = ObjectId.isValid(req.body.group) ? ObjectId(req.body.group) : null;
  req.body.deed = ObjectId.isValid(req.body.deed) ? ObjectId(req.body.deed) : null;

  new Act(req.body).save((err, act) => {
    if (err) { return next(err); }

    res.status(201).location(`/acts/${act._id}`).json(act);
  });
});

/**
 * @api {get} /acts/:act Get act
 * @apiName GetAct
 * @apiGroup Acts
 *
 * @apiUse GetActSuccess
 */
router.get('/:act', _.partialRight(route.getByParam, 'act'));

/**
 * @api {delete} /acts/:act Remove act
 * @apiName DeleteAct
 * @apiGroup Acts
 *
 * @apiUse NoContentSuccess
 */
router.delete('/:act', _.partialRight(route.deleteByParam, 'act'));

/**
 * @api {get} /acts/:act/likes List act likes
 * @apiName GetActLikes
 * @apiGroup Acts
 *
 * @apiUse GetLikesSuccess
 */
router.get('/:act/likes', (req, res, next) => {
  Like.find({ 'target.act': req.act._id }, (err, likes) => {
    if (err) { return next(err); }

    res.status(200).json(likes);
  });
});

/**
 * @api {post} /acts/:act/likes Create act like
 * @apiName PostActLikes
 * @apiGroup Acts
 *
 * @apiUse CreateLikeSuccess
 */
router.post('/:act/likes', (req, res, next) => {
  req.body = _.pick(req.body, Like.getFilter());
  req.body.user = ObjectId.isValid(req.body.user) ? ObjectId(req.body.user) : null;
  req.body.target = { act: req.act._id };

  new Like(req.body).save((err, like) => {
    if (err) { return next(err); }

    res.status(201).location(`/acts/${req.act._id}/likes/${like._id}`).json(like);
  });
});

/**
 * @api {delete} /acts/:act/likes/:like Remove act like
 * @apiName DeleteActLike
 * @apiGroup Acts
 *
 * @apiUse NoContentSuccess
 */
router.delete('/:act/likes/:like', _.partialRight(route.deleteByParam, 'like'));

/**
 * @api {get} /acts/:act/comments List act comments
 * @apiName GetActComments
 * @apiGroup Acts
 *
 * @apiUse GetCommentsSuccess
 */
router.get('/:act/comments', (req, res, next) => {
  Comment.find({ 'target.act': req.act._id }, (err, comments) => {
    if (err) { return next(err); }

    res.status(200).json(comments);
  });
});

/**
 * @api {post} /acts/:act/comments Create act comment
 * @apiName PostActComments
 * @apiGroup Acts
 *
 * @apiUse CreateCommentSuccess
 */
router.post('/:act/comments', (req, res, next) => {
  req.body = _.pick(req.body, Comment.getFilter());
  req.body.user = ObjectId.isValid(req.body.user) ? ObjectId(req.body.user) : null;
  req.body.target = { act: req.act._id };

  new Comment(req.body).save((err, comment) => {
    if (err) { return next(err); }

    res.status(201).location(`/acts/${req.act._id}/comments/${comment._id}`).json(comment);
  });
});

/**
 * @api {put} /acts/:act/comments/:comment Update act comment
 * @apiName PutActComment
 * @apiGroup Acts
 *
 * @apiUse GetCommentSuccess
 */
router.put('/:act/comments/:comment', _.partialRight(route.putByParam, 'comment').bind(Comment));

/**
 * @api {delete} /acts/:act/comments/:comment Remove act comment
 * @apiName DeleteActComment
 * @apiGroup Acts
 *
 * @apiUse NoContentSuccess
 */
router.delete('/:act/comments/:comment', _.partialRight(route.deleteByParam, 'comment'));

module.exports = router;
