const request = require('supertest');
const expect = require('expect');
const {ObjectID} = require('mongodb');
const {app} = require('../server');
const {Todo} = require('../models/todo');

const dummyTodos = [
  {text: 'First test todo' , _id: new ObjectID()}, {text: 'Second test todo', _id: new ObjectID(), completed: true, completedAt: 333333}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(dummyTodos);
  }).then(() => done());
})

describe('POST /todos', () => {

  it('should create a new todo', (done) => {

    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if(err){
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e))

      })

  });


  it('should not create todo with invalid data', (done) => {

    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err){
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e))

      });

  });


describe('GET /todos route', () => {
  it('should get all todos', (done) => {

    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);

  })
})


describe('GET /todos/:id', () => {

  it('should return todo doc', (done) => {

      request(app)
        .get(`/todos/${dummyTodos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
          // console.log(res.body);
          expect(res.body.todo.text).toBe(dummyTodos[0].text);
        })
        .end(done);

  });

  it('should return 404 if todo not found', (done) => {

    var hexString = new ObjectID().toHexString();

    request(app)
      .get(`/todos/${hexString}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 for non-object ids', (done) => {

    request(app)
      .get(`/todos/123`)
      .expect(404)
      .end(done);

  });

})

});


describe('DELETE /todos/:id', () => {

  it('should delete a todo ', (done) => {

    var hexId = dummyTodos[1]._id.toHexString();

    request(app)
      .delete(`/todos/${hexId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(hexId);
      })
      .end((err, res) => {
        if(err){
          return done(err);
        }

        Todo.findById(hexId).then((todo) => {
          expect(todo).toBe(null);
          done();
        }).catch((err) => done(err));

      })

  });

  it('should return 404 if todo not found', (done) => {

    var hexString = new ObjectID().toHexString();

    request(app)
      .delete(`/todos/${hexString}`)
      .expect(404)
      .end(done);

  });


  it('should return 404 if objectID is invalid', (done) => {


        request(app)
          .delete(`/todos/123`)
          .expect(404)
          .end(done);


  })

})

describe('PATCH /todos/:id', () => {

  it('should update todo', (done) => {

    const hexId = dummyTodos[0]._id.toHexString();
    const text = 'Hola text changed';

    request(app)
      .patch(`/todos/${hexId}`)
      .send({
        text,
        completed: true
      })
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(true);
        // expect(res.body.todo.completedAt).toBe(); ne radi zbog updateovanog expect librarayja
      })
      .end(done);


  });

  it('should clear completedAt when todo is not completed', (done) => {

    const hexId = dummyTodos[1]._id.toHexString();
    const text = 'Changed text';

    request(app)
      .patch(`/todos/${hexId}`)
      .send({
        text,
        completed: false
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toEqual(text);
        expect(res.body.todo.completed).toBe(false);
        expect(res.body.todo.completedAt).toBe(null);
      })
      .end(done);

  });

})
