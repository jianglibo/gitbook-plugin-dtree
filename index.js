var asciitree = require("my-ascii-tree");
var os = require('os');

module.exports = {
  blocks: {
    asciitree: {
      // shortcuts: {
      //   parsers: ["markdown"],
      //   start: "$$",
      //   end: "$$"
      // },
      process: function(block) {
        var body = block.body || "";
        var asciitreeConfig = this.book.config.get('pluginsConfig.asciitree');
        var tree = new asciitree.AsciiTree(asciitree.BytesLine.getArray(body)).convert();
        var convertedLines = tree.toStringArray();
        // because parse is true, ``` should be treat as markdown tag.
        convertedLines.unshift("```");
        convertedLines.push("```");
        return {
          body: convertedLines.join(os.EOL),
          parse: true
        };
      }
    }
  }
};

/*
process can return this formatter too.
return {
    body: lang+"_"+blk.body+"_"+lang,
    html: false
};
https://github.com/GitbookIO/gitbook/blob/master/lib/plugin.js
// Get config from book
Plugin.prototype.getConfig = function() {
    return this.book.config.get('pluginsConfig.'+this.reducedName(), {});
};
*/
