const request = require('supertest');
const expect = require('expect');

const {app} = require('./server');
const {User} = require('./user');
const {Todo} = require('./todo');

beforeEach((done) => {
  Todo.remove({})
    .then(() => done())
    .catch((e) => {
      console.log(e);
      done(e)
    });
});

describe('POST /todos', () => {
  it('should save todo to mongodb', (done) => {
    var text = "todo from test";

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect( res => {
        expect(res.body.text).toBe(text)
      })
      .end((err, res) => {
        if(err) done(err);

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => {
          done(e);
        });
      });
  });

  it('should not save todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .expect((res) => expect(res.body.name).toBe("ValidationError"))
      .end((e, res) => {
        if(e) done(e);

        Todo.find()
          .then((todos) => {
            expect(todos.length).toBe(0);
            done();
          })
          .catch((e) => done(e));
      });
  })
});