jasmine.getFixtures().fixturesPath = 'base/test/spec/javascripts/fixtures/html';
jasmine.getStyleFixtures().fixturesPath = 'base/test/spec/javascripts/fixtures/css';

describe("noop", function(){
   it("should do nothing", function(){
       expect(null).toBe(null);
   })
});
