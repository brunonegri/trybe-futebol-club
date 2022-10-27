import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import {app} from '../app'
const { expect } = chai;
chai.use(chaiHttp)
describe('Tests on /login Route', ()=> {
    describe('Post on /login', ()=> {
        it('should return a status 200', async()=> {
            const response = await chai.request(app).get('/login')
            expect(response.status).to.equal(200)
        })
    })
})