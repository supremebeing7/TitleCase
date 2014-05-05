describe('titleCase', function() {
  it('makes all letters after the first lower case', function() { 
    titleCase("TITANIC").should.equal("Titanic");
  });

  it('does not capitalize prepositions or conjunctions', function() {
    titleCase("part Of The A An Or But TITANIC SANK").should.equal("Part of the a an or but Titanic Sank");
  });

  it('does not capitalize prepositions or conjunctions', function() {
    titleCase("Yes Or But").should.equal("Yes or but");
  });

  it('capitalizes the first letter of each word', function() {
    titleCase('the').should.equal('The');
  });
});

describe('upperCase', function() {
  it('capitalizes the first letter of each word', function() {
    upperCase(['the']).should.eql(['The']);
  });
});

describe('exceptions', function() {
  it('does not capitalize prepositions or conjunctions', function() {
    exceptions(["Part","Of","The","World"]).should.eql(["Part","of","the","World"]);
  });
});
