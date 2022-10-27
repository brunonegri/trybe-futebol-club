import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import {app} from '../app'
const { expect } = chai;
import { validUser, invalidUser, findUser,adminToken } from '../mocks/users'
import UserModel from '../database/models/UserModel';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

chai.use(chaiHttp)
describe('Tests on /login Route', ()=> {
    beforeEach(sinon.restore)
    describe('When "email" is not informed', ()=> {
        it('should return a status 400', async()=> {
            const response = await chai.request(app).post('/login')
            .send({password: '1234567'})
            expect(response.status).to.equal(400)
        })
    })
    describe('When "password" is not informed', ()=> {
        it('should return a status 400', async()=> {
            const response = await chai.request(app).post('/login')
            .send({email: 'email@email.com'})
            expect(response.status).to.equal(400)
        })
    })
    describe('When is not informed a valid "email" or "password"', ()=> {
        it('should return a status 401', async()=> {
            sinon.stub(UserModel,'findOne').resolves(findUser as UserModel)
            sinon.stub(bcrypt, 'compare').resolves(false)
            const response = await chai.request(app).post('/login')
            .send(invalidUser)
            expect(response.status).to.equal(401)
        })
    })
    describe('When is informed a valid "user"', ()=> {
        it('should return a status 200', async()=> {
            sinon.stub(UserModel,'findOne').resolves(findUser as UserModel)
            sinon.stub(jwt, 'sign').resolves(adminToken.token)
            sinon.stub(bcrypt, 'compare').resolves(true)
            const response = await chai.request(app).post('/login')
            .send(validUser)
            expect(response.status).to.equal(200)
        })
    })

})