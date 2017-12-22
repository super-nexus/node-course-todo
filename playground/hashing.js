const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var data = {
  id: 10
};

var password = '123abc!';
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (error, hash) => {
//       console.log(hash);
//   })
// })


var hashedPassoword = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTUxMzk3ODQwMH0.H9aXRbIL6HIV4K37kz-P3kBIx8jPYJVBjpa4iBggcVA';

bcrypt.compare(password, hashedPassoword, (err, res) => {
  console.log(res);
})

var token = jwt.sign(data, '123abc')
console.log(token);
var decoded = jwt.verify(token, '123abc');
console.log(`decoded: ${JSON.stringify(decoded)}`);

// var message = 'i am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resultHash === token.hash){
//   console.log('Data was not Changed');
// }
// else{
//   console.log('Data was Changed dont trust');
// }
