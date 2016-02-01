var path = require('path');
var fs = require('fs');
var assert = require('assert');
var gitbook = require('../index');
var os = require('os');

describe('GitBook', function() {
  describe('#process', function() {
    it('should not null', function() {
      assert(gitbook.blocks.asciitree.process, "not null");
      var newBlock = gitbook.blocks.asciitree.process({
        body: "hello"
      });
      assert.deepEqual({
        body: "```" + os.EOL + "└── hello" + os.EOL + "```",
        parse: true
      }, newBlock);
    });
  });
});
