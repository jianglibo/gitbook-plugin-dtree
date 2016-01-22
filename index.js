var katex = require("my-ascii-tree");

module.exports = {
    blocks: {
        asciitree: {
            process: function(block) {
              var body = block.body || "";
              var lines = body.split("\n");
              var convertedLines = new DtreeConverter(lines, "-").convert() || [];
              return convertedLines.join("\n");
            }
        }
    }
};
