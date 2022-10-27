import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import {app} from '../app'
const { expect } = chai;
chai.use(chaiHttp)
describe('Tests on /login Route', ()=> {
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
            const response = await chai.request(app).post('/login')
            .send({email: 'email@email.com', password: '1234567'})
            expect(response.status).to.equal(401)
        })
    })
    describe('When is informed a valid "user"', ()=> {
        it('should return a status 200', async()=> {
            const response = await chai.request(app).post('/login')
            .send({email: 'admin@admin.com', password: 'secret_admin'})
            expect(response.status).to.equal(200)
        })
    })

})