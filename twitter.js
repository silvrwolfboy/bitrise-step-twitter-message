#!/usr/bin/env node

var Twitter = require('twitter');
 
let debug = process.argv[2]; //debug true/false
let tw_consumer_key = process.argv[3];
let tw_consumer_secret = process.argv[4]; 
let tw_access_token_key = process.argv[5];
let tw_access_token_secret = process.argv[6];
let tw_screen_name = process.argv[7]; //'kawaiseb'
let tw_status = process.argv[8];


/*
let debug = "yes"; //debug true/false
let tw_consumer_key = "ctDQvfwI7ppvfGi6o8qLsc9ZN";
let tw_consumer_secret = "vW25CIp9OMbqByNbtKtxkdPGFShUa4ByMGVXIiVPcEdfaJiUg8"; 
let tw_access_token_key = "2783726838-djGDWFEaIKKBmVjVpVDQmvd4XfqJ1NNyIGVstXY";
let tw_access_token_secret = "zMwq2MmLckeQ51cGGpG6RYmeVWdcCn7edTi2wHJ1ALtVc";
let tw_screen_name = "kawaiseb"; //'kawaiseb'
let tw_status = "[dev] test bitrise step";
*/

if(debug == null || debug == "" || tw_consumer_key == null  || tw_consumer_key == "" || tw_consumer_secret == null || tw_consumer_secret == "" 
    || tw_access_token_key == null || tw_access_token_key == "" || tw_access_token_secret == null || tw_access_token_secret == "" || tw_screen_name == null || tw_screen_name == ""
        || tw_status == null || tw_status == "") {
    console.log(`ERROR : At least one parameter is missing`);
    console.log(`ERROR : debug = ${debug}|tw_consumer_key = ${tw_consumer_key}|tw_consumer_secret = ${tw_consumer_secret}|tw_access_token_key = ${tw_access_token_key}
    |tw_access_token_secret = ${tw_access_token_secret}|tw_screen_name = ${tw_screen_name}|tw_status = ${tw_status}`);
    return 1;
}

var client = new Twitter({
  consumer_key: tw_consumer_key,
  consumer_secret: tw_consumer_secret,
  access_token_key: tw_access_token_key,
  access_token_secret: tw_access_token_secret
});
 
var params = {screen_name: tw_screen_name};

client.post('statuses/update', {status: tw_status},  function(error, tweet, response) {
    if(error) {
        console.log(error);
        throw error;
    }
    if(debug == 'yes') {
        console.log(tweet);  // Tweet body. 
        console.log(response);  // Raw response object.
    } 
  });