import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import {app} from '../app'
const { expect } = chai;
import MatchesModel from '../database/models/MatchesModel'
import {teams, teamById} from '../mocks/teams'

chai.use(chaiHttp)
describe('Tests on /matches Route', ()=> {
    beforeEach(sinon.restore)
    describe('GET on matches endpoint',  () => {
        it('should return a status 200',async ()=> {
        //    sinon.stub(MatchesModel,'findAll').resolves(teams as MatchesModel[])
           const response = await chai.request(app).get('/matches')
           expect(response.status).to.equal(200)
        })
    })

    // describe('GET on teams/:id endpoint',  () => {
    //     it('should return a status 200',async ()=> {
    //     //    sinon.stub(MatchesModel,'findOne').resolves(teamById as MatchesModel)
    //        const response = await chai.request(app).get('/teams/1')
    //        expect(response.status).to.equal(200)
    //     })
    // })
})