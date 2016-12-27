const Models = require('../../../database/database-config');

module.exports = {
  addAPost: (req, res, next) => {
    Models.Post.build({
      title: req.body.title,
      message: req.body.message,
      sentiment: 0,
      flag: 0,
      anon: req.body.anon,
    }).save()
    .then(() => {
      res.status(201).send('Your post has been submitted!');
    })
    .catch((error) => {
      res.status(404).send(error);
    });
  },
};
