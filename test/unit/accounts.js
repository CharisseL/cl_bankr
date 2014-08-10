/* jshint expr:true*/
/* global describe, it, before, beforeEach*/

'use strict';

var expect = require('chai');
var Account = require('../../app/models/account');
var dbConnect = require('../../app/lib/mongodb');
var Mongo = require('mongodb');
var cp = require('child_process');
var db = 'bankr-test';

describe('Account', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });
  beforeEach(function(done){
    cp.execFile(__dirname + '../scripts/freshdb.sh', [db], {cwd:__dirname + '../scripts'}, function(){
      done();
    });
  });
describe('constructor', function(){
    it('should create a new account', function(){
      var acct = new Account({name:'Bob', color: '#FF3300', photo:'url', pin:'5678', type:'savings', deposit:'950'});
      
      expect(acct).to.be.instanceof(Account);
      expect(acct.name).to.equal('Bob');
      expect(acct.


    });
  });
  describe('#addTransaction', function(){
    it('should conduct a transaction', function(){
      
    });
  });
});

