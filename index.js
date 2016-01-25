var asciitree = require("my-ascii-tree");

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
        var lines = body.split("\n");
        // console.log(this.ctx); // this will printed in gitbook console.
        // console.log(this.ctx && this.ctx.config); // this will printed in gitbook console.
        // console.log(this.ctx && this.ctx.config && this.ctx.config.pluginsConfig); // this will printed in gitbook console.
        // console.log(this.book); // this will printed in gitbook console.
        // if (this.getConfig) {
        //   console.log(this.getConfig());
        // }
        var convertedLines = new asciitree.AsciiTree(lines).convert() || [];
        // if surrounded by ```, block will not be processed.
        convertedLines.unshift("```");
        convertedLines.push("```");
        return {
          body: convertedLines.join("\n"),
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
