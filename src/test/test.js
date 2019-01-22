import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server/server.js'

let should = chai.should();
chai.use(chaiHttp);

describe('GET /division', function () {
    describe('Positive', function () {
        it('20 / 5 = 4', function (done) {
            chai.request(server)
                .get('/division?a=20&b=5')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eql({result: 4});
                    done();
                });
        });
    });
});