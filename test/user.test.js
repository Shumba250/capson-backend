import signup from '../src/models/signupModule.js';
import contactMessages from '../src/models/contactMessageModule';
import { Article } from '../src/models/blogmodules.js';
import chai, { expect } from 'chai';
import request from 'supertest';
import app from '../index.js';
import chaiHttp from 'chai-http';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

chai.use(chaiHttp);

let token;
let userToken;

beforeEach(async () => {
  const admin = new signup({
    firstName: 'mudakikwa',
    lastName: 'aimable',
    email: 'mudakikwaaimable@gmail.com',
    password: await bcrypt.hash('umurungi1', 10),
    role: 'admin',
  });

  await admin.save();
  const logins = await request(app)
    .post('/login')
    .send({ email: 'mudakikwaaimable@gmail.com', password: 'umurungi1' });
  token = logins.body.token;
});

describe('test the user endpoints', async () => {
  beforeEach(async () => {
    await signup.deleteMany({});
  });

  afterEach(async () => {
    await signup.deleteMany({});
  });
  it('should create a user', async () => {
    const result = await request(app).post('/signups').send({
      firstName: 'mudakikwa',
      lastName: 'aimable',
      email: 'mudakikwaaimable05@gmail.com',
      password: 'bob',
    });
    chai.expect(result).to.have.status(200);
  });
});
it('error in creating a user', async (done) => {
  const result = await request(app).post('/signups').send({
    firstName: 'mudakikwa',
    lastName: '',
    email: 'mudakikwaaimable05@gmail.com',
    password: 'bob',
  });
  chai.expect(result).to.have.status(400);
  done();
});

it('retrieving all users', async () => {
  const result = await request(app)
    .get('/signups')
    .set('Authorization', `Bearer ${token}`);
  chai.expect(result).to.have.status(200);
});

it('it retrieves a single user', async () => {
  const newUser = new signup({
    firstName: 'mugabo',
    lastName: 'alexandre',
    email: 'mudakikwaaimable05@gmail.com',
    password: 'bob',
  });
  await newUser.save();

  const id = newUser._id;
  const singleUser = await request(app)
    .get(`/signups/${id}`)
    .set('Authorization', `Bearer ${token}`);
  chai.expect(singleUser).to.have.status(200);
});

it('update user information', async () => {
  const updateUser = new signup({
    firstName: 'rwigamba',
    lastName: 'kenneth',
    email: 'rwigambakeneth@gmail.com',
    password: 'kenneth',
  });
  await updateUser.save();

  const id = updateUser._id;
  const newUpdateUser = await request(app)
    .patch(`/signups/${id}`)
    .send({
      firstName: 'mugabo',
      lastName: 'alexandre',
      email: 'rwigambakeneth@gmail.com',
      password: 'kenneth',
    })
    .set('Authorization', `Bearer ${token}`);
  chai.expect(newUpdateUser).to.have.status(200);
});

it('should delete single user', async () => {
  const deleteUser = new signup({
    firstName: 'mugabo',
    lastName: 'alexandre',
    email: 'mudakikwaaimable05@gmail.com',
    password: 'bob',
  });
  await deleteUser.save();

  const id = deleteUser._id;
  const deleteUsers = await request(app)
    .get(`/signups/${id}`)
    .set('Authorization', `Bearer ${token}`);
  chai.expect(deleteUsers).to.have.status(200);
});

//contact messages endpoint test

describe("contact messages endpoint api's", async () => {
  beforeEach(async () => {
    await contactMessages.deleteMany({});
  });

  afterEach(async () => {
    await contactMessages.deleteMany({});
  });

  it('creates a message and sends it', async () => {
    const result = await request(app).post('/contactMessages').send({
      name: 'umuurungi helen',
      email: 'umurungihelen@gmail.com',
      subject: 'web design',
      message: 'jdjkdnjkdvnkvnkvfjkfnvjfvnkvjfnkjknnkknnkjnk',
    });
    chai.expect(result).to.have.status(200);
  });
  it('error in creating a message', async () => {
    const result = await request(app).post('/contactMessages').send({
      email: 'umurungihelen@gmail.com',
      subject: 'web design',
      message: 'jdjkdnjkdvnkvnkvfjkfnvjfvnkvjf',
    });
    chai.expect(result).to.have.status(400);
  });

  it('it retrieves a single message', async () => {
    const newMessage = new contactMessages({
      name: 'umuurungi helen',
      email: 'umurungihelen@gmail.com',
      subject: 'web design',
      message: 'jdjkdnjkdvnkvnkvfjkfnvjfvnkvjf',
    });
    await newMessage.save();

    const id = newMessage._id;
    const singleMessage = await request(app)
      .get(`/contactmessages/${id}`)
      .set('Authorization', `Bearer ${token}`);
    chai.expect(singleMessage).to.have.status(200);
  });

  it('should retrieve all messages', async () => {
    const messages = await request(app)
      .get('/contactMessages')
      .set('Authorization', `Bearer ${token}`);
    chai.expect(messages).to.have.status(200);
  });

  it('should delete a message', async () => {
    const deleteMessage = new contactMessages({
      name: 'umuurungi helen',
      email: 'umurungihelen@gmail.com',
      subject: 'web design',
      message: 'jdjkdnjkdvnkvnkvfjkfnvjfvnkvjf',
    });
    await deleteMessage.save();

    const id = deleteMessage._id;
    const deleteMessages = await request(app)
      .get(`/contactmessages/${id}`)
      .set('Authorization', `Bearer ${token}`);
    chai.expect(deleteMessages).to.have.status(200);
  });
});

// testin all blog endpoint api's
describe("testing all blog endpoint api's", async () => {
  beforeEach(async () => {
    await contactMessages.deleteMany({});
  });

  afterEach(async () => {
    await contactMessages.deleteMany({});
  });
  it('it retrieves a blog', async () => {
    const singleBlog = new Article({
      title: 'umuurungi helen',
      description: 'umurungihelen@gmail.com',
      image: 'web design',
    });
    await singleBlog.save();

    const id = singleBlog._id;
    const singleBlogs = await request(app)
      .get(`/blogs/${id}`)
      .set('Authorization', `Bearer ${token}`);
    chai.expect(singleBlogs).to.have.status(200);
  });

  it('retrieves all blogs', async () => {
    const blogs = await request(app)
      .get('/blogs')
      .set('Authorization', `Bearer ${token}`);
    chai.expect(blogs).to.have.status(200);
  });

  it('it updates single blog', async () => {
    const singleBlog = new Article({
      title: 'umuurungi helen',
      description: 'umurungihelen@gmail.com',
      image: 'web design',
    });
    await singleBlog.save();
    const id = singleBlog._id;
    const singleBlogs = await request(app)
      .patch(`/blogs/${id}`)
      .send({
        title: 'data science with python',
        description: 'kdsdkhdcudhcduchckdhckdjc',
        image: 'bobthe masterofallthatexists',
      })
      .set('Authorization', `Bearer ${token}`);
    chai.expect(singleBlogs).to.have.status(200);
  });

  it('/retrieves all blogs', async () => {
    const blogs = await request(app)
      .get('/blogs')
      .set('Authorization', `Bearer ${token}`);
    chai.expect(blogs).to.have.status(200);
  });

  it('creates a blog', async () => {
    const result = await request(app)
      .post('/blogs')
      .send({
        title: 'umuurungi helen',
        description: 'umurungihelen@gmail.com',
        image: 'web design',
      })
      .set('Authorization', `Bearer ${token}`);
    chai.expect(result).to.have.status(200);
  });

  it('should delete a blog', async () => {
    const deleteBlog = new Article({
      title: 'umuurungi helen',
      description: 'umurungihelen@gmail.com',
      image: 'web design',
    });
    await deleteBlog.save();

    const id = deleteBlog._id;
    const deleteBlogs = await request(app)
      .get(`/blogs/${id}`)
      .set('Authorization', `Bearer ${token}`);
    chai.expect(deleteBlogs).to.have.status(200);
  });
  it('counts the number of blogs', async () => {
    const blogCount = await request(app)
      .get('/blogs/blogCount')
      .set('Authorization', `Bearer ${token}`);
    chai.expect(blogCount).to.have.status(200);
  });
});

// testing all comments endpoint api's

describe("testing all comment endpoint api's", async () => {
  beforeEach(async () => {
    await contactMessages.deleteMany({});
  });

  afterEach(async () => {
    await contactMessages.deleteMany({});
  });

  it('error adding a comment', async () => {
    const commentError = await request(app).get('/scdkcjjkd/comments');
    chai.expect(commentError).to.have.status(404);
  });
  it('adds a comment', async () => {
    const user = new signup({
      firstName: 'cyogere',
      lastName: 'brian',
      email: 'cyogerebrian@gmail.com',
      password: await bcrypt.hash('umurungi', 10),
      role: 'user',
    });

    await user.save();
    const logins = await request(app)
      .post('/login')
      .send({ email: 'mudakikwaaimable@gmail.com', password: 'umurungi' });
    userToken = logins.body.token;
  });
  const singleBlog = new Article({
    title: 'umuurungi helen',
    description: 'umurungihelen@gmail.com',
    image: 'web design',
  });
  await singleBlog.save();
  const id = singleBlog._id;

  const addComment = await request(app)
    .post(`/blogs/${id}/comments`)
    .send({
      name: 'mugabo',
      email: 'mugaboalexandre@gmail.com',
      comment: 'dksdcsdhcdischdcdhdiducdhdiudhuidhucdihddcdscds',
    })
    .set('Authorization', `Bearer ${userToken}`);
  chai.expect(addComment).to.have.status(200);
});

// testing all admin routes

describe('testing all admin routes', async () => {
  beforeEach(async () => {
    await contactMessages.deleteMany({});
  });

  afterEach(async () => {
    await contactMessages.deleteMany({});
  });

  it('create the admin', async () => {
    const newAdmin = new signup({
      firstName: 'cyogere',
      lastName: 'brian',
      email: 'cyogerebrian@gmail.com',
      password: 'brian',
      role: 'admin',
    });
    await newAdmin.save();
    const admin = await request(app)
      .post('/Admin')
      .send(newAdmin)
      .set('Authorization', `Bearer ${token}`);
    chai.expect(admin).to.have.status(200);
  });
});
