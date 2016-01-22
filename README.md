# ascii directory tree plugin for GitBook

convert indented lines to ascii directory tree for gitbook.
in:
```
app
-main.js
-helper.js
-others
--Brocfile.js
package.json
```

out:
```
├── app
|   ├── main.js
|   ├── helper.js
|   └── others
|       └── Brocfile.js
└── package.json
```

Add it to your book.json with a basic configuration:
```json
{
    "plugins": ["asciitree"],
    "pluginsConfig": {
        "asciitree": {
            "leadingChar": "-"
        }
    }
}
```
