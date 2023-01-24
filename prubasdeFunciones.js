const fs = require ('fs');
const path = require ('path');
const isValidRoute = (path) => {
    if (fs.existsSync('/path/to/file.txt')) {
      return true;
    } else {
      return false;
    }
  };
