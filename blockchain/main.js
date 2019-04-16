// Java Script Blockchain
// https://www.youtube.com/watch?v=zVqczFZr124


const SHA256 = require('crypto-js/sha256'); // import SHA256

// Create the Block
class Block{
  constructor(index, timestamp, data, previousHash = ''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }
  // Create a method to calculate the hash for each block
  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

// Create Blockchain
class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()];
  }
  createGenesisBlock(){
    return new Block(0, "4/15/2019", "Genesis", "0");
  }
  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }
  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}

let bgcoin = new Blockchain();
bgcoin.addBlock(new Block(1, "2/16/1974",{amount: 4}));
bgcoin.addBlock(new Block(2, "3/16/1974",{amount: 10}));

console.log(JSON.stringify(bgcoin, null,4));