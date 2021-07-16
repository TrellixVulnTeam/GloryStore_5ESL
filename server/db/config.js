const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create a table
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS Glory (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,     
      nickname VARCHAR(255), 
      games VARCHAR(255),
      rankee VARCHAR(255),
      image VARCHAR(255),
      gamestrophies VARCHAR(255),
      priceofhisglory INT 
    );`)
    .error(err => {
      console.log(err);
    });
};