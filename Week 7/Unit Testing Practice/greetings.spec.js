// Unit tests to cover the greet() function
// To run these tests, make sure you're in the folder containing this file
// run the command: npm install to setup the testing framework
// Thn run the command: npm run test
// The tests should run successfully

const greet = require("./greetings")

describe('test greet()', function () {
  it('should greet a name', function () {
    expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
  });
  it('should handle null value', function () {
    expect(greet()).toBe('Hello there!');
  });
  it('should handle shouting', function () {
    expect(greet('JOSE')).toBe('HELLO JOSE!');
  });
  it('should handle 2 names', function () {
    expect(greet(['Jose', 'Pep'])).toBe('Hello, Jose, Pep');
  });
  it('should handle multiple names', function () {
    expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toBe(
      'Hello, Alex, Arsene, Jose, Zidane'
    );
  });
});


