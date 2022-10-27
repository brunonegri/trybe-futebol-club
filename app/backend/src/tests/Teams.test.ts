import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import {app} from '../app'
const { expect } = chai;
import TeamsModel from '../database/models/TeamsModel'
import teams from '../mocks/teams'

chai.use(chaiHttp)
describe('Tests on /teams Route', ()=> {
    beforeEach(sinon.restore)
    describe('GET on teams endpoint', async () => {
        // sinon.stub(TeamsModel,'getAll').resolves(teams as TeamsModel[])
       const response = await chai.request(app).get('/teams')
       expect(response.status).to.equal(200)
    })

    // describe('When is informed a valid "user"', ()=> {
    //     it('should return a status 200', async()=> {
    //         sinon.stub(UserModel,'findOne').resolves(findUser as UserModel)
    //         sinon.stub(jwt, 'sign').resolves(adminToken.token)
    //         sinon.stub(bcrypt, 'compare').resolves(true)
    //         const response = await chai.request(app).post('/login')
    //         .send(validUser)
    //         expect(response.status).to.equal(200)
    //     })
    // })

})