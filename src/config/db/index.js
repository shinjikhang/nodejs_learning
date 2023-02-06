const mongoose = require('mongoose');

async function connect(){
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/blog_dev');
    console.log('-------------Connection successfully----------------');
  }catch(error){
    console.log('Connection fail');
  }
}

const abc = 1;

module.exports = {connect,abc};