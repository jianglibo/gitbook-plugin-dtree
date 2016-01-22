var path = require('path');
var fs = require('fs');
var assert = require('assert');
var gitbook = require('../index');

describe('GitBook', function() {
  describe('#process', function() {
    it('should not null', function() {
      assert(gitbook.blocks.asciitree.process, "not null");
      var newBlock = gitbook.blocks.asciitree.process({body: "hello"});
      assert.equal("└── hello", newBlock);
    });
  });
});
