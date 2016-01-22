var DtreeConverter = require("my-ascii-tree");

module.exports = {
    blocks: {
        asciitree: {
            process: function(block) {
              var body = block.body || "";
              var lines = body.split("\n");
              console.log(this); // this will printed in gitbook console.
              var convertedLines = new DtreeConverter(lines).convert() || [];
              // if surrounded by ```, block will not be processed.
              convertedLines.unshift("```");
              convertedLines.push("```");
              return convertedLines.join("\n");
            }
        }
    }
};
