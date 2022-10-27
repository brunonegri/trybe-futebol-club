import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import {app} from '../app'
const { expect } = chai;
import TeamsModel from '../database/models/TeamsModel'
import {teams, teamById} from '../mocks/teams'

chai.use(chaiHttp)
describe('Tests on /teams Route', ()=> {
    beforeEach(sinon.restore)
    describe('GET on teams endpoint',  () => {
        it('should return a status 200',async ()=> {
           sinon.stub(TeamsModel,'findAll').resolves(teams as TeamsModel[])
           const response = await chai.request(app).get('/teams')
           expect(response.status).to.equal(200)
        })
    })

    describe('GET on teams/:id endpoint',  () => {
        it('should return a status 200',async ()=> {
           sinon.stub(TeamsModel,'findOne').resolves(teamById as TeamsModel)
           const response = await chai.request(app).get('/teams/1')
           expect(response.status).to.equal(200)
        })
    })
})