// Java Script Blockchain
// https://www.youtube.com/watch?v=zVqczFZr124


// Create the Block
class Block{
  constructor(index, timestamp, data, previousHash = ''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = '';
  }
  // Create a method to calculate the hash for each block
  calculateHash(){
    // INSTALL NPM AND THEN CONTINUE WITH LECTURE
  }
}