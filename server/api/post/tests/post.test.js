const Models = require('../../../../database/database-config');
// import Sequelize from 'sequelize';
const request = require('request');
const expect = ('expect');

describe('API Endpoint Tests', () => {
  // const dbConnection = new Sequelize(
  //   'app_data',
  //   'lukegolden',
  //   '',
  //   {
  //     host: 'localhost',
  //     dialect: 'postgres',
  //     port: 5432,
  //   }
  // );
  // dbConnection.sync();
  // beforeEach((done) => {
  //   /* Empty the db table before each test so that multiple tests
  //    * (or repeated runs of the tests) won't screw each other up: */
  // });
  // afterEach(function() {
  //   dbConnection.end();
  // });
  it('Should add a Post to the DB', (done) => {
    request({
      method: 'POST',
      uri: 'http://localhost:3000/api/post',
      json: {
        title: 'This is a test title',
        message: 'This is a test message',
        anon: false,
      },
    }, () => {
      Models.Post.findAll({ where: { title: 'This is a test title' } })
      .then((post) => {
        console.log(post);
        expect(post.title).toEqual('This is a test title');
        done();
      });
    });
  });
});
