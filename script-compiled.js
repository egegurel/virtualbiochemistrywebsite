"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var express = require('express');
var nodemailer = require("nodemailer");
var cors = require('cors');
var https = require('https');
var https2 = require('https');
var http = require('http', {
  cors: {
    origin: "*"
  }
});
var io = require('socket.io');
//const { Server: SocketIOServer } = require('socket.io');
//const React = require('react');
//const http2Express = require('express-http2-workaround');
var http2 = require('http2');
var axios = require('axios');
var httpMocks = require('node-mocks-http');
var EventEmitter = require('events');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = 3000;
var session = require('express-session');
var MongoSession = require('connect-mongodb-session')(session);
var bcrypt = require('bcryptjs');
var _require = require('crypto'),
  crypto = _require.crypto;
var multer = require('multer'); // Middleware for handling file uploads
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var cacheControl = require('express-cache-controller');
var util = require('util');
app.use(cacheControl({
  noStore: true,
  noCache: true,
  mustRevalidate: true,
  maxAge: 0
}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));
console.log(__dirname);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.json());
//app.use(express.static(path.join(__dirname, 'views')));
app.use(express["static"]('views'));
app.use(express["static"]('uploadedphotoss'));
app.use(express["static"]('mywebsite'));
app.set("ipaddr", "127.0.0.1");
app.set("port", 587);
app.set("port", 8443);
app.use('/user/:name', express["static"]('views'));
app.use('/manager/:name', express["static"]('views'));
app.use('/manager/:name/', express["static"]('uploadedphotoss'));
app.use('/manager/:name/', express["static"]('serverdocumentss'));
app.use('/user/:name/', express["static"](path.join(__dirname, 'uploadedphotoss')));
app.use('/user/:name/', express["static"](path.join(__dirname, 'serverdocumentss')));
var React = require('react');
var ReactDOM = require('react-dom');
//const { execSync } = require('child_process');
var MyComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(MyComponent, _React$Component);
  function MyComponent() {
    _classCallCheck(this, MyComponent);
    return _callSuper(this, MyComponent, arguments);
  }
  _createClass(MyComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("h1", null, "Hello, world!");
    }
  }]);
  return MyComponent;
}(React.Component);
ReactDOM.render( /*#__PURE__*/React.createElement(MyComponent, null), document.getElementById('root'));
//import * as fileTypew from file-type;

//const fileTypew = require('file-type');
//import fileTypew from 'file-type';

var jwt = require('jsonwebtoken');

/*app.use(cors({
  origin: 'https://127.0.0.1:8443',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));*/
//app.use(cors({origin:'http://127.0.0.1:3000'}));
/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});*/
/*
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.status(204).send();
});*/

mongoose.Promise = global.Promise; // Manually set Mongoose to use native promises

mongoose.connect("mongodb://127.0.0.1:27017/VirtualBio", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(express["static"]('views'));
var schemacredentials = new mongoose.Schema({
  username: String,
  name: String,
  surname: String,
  email: String,
  day: Number,
  month: Number,
  year: Number,
  images: Buffer,
  gender: String,
  password: String,
  token: String,
  enquiryy: [String],
  imagepathfromdb: [String],
  enquiryimagepathfromdb: [String],
  enquirydocumentpathfromdb: [String],
  enquiryisreaded: {
    type: Boolean,
    "default": false
  },
  enquiryisnotreaded: {
    type: Boolean,
    "default": true
  },
  hasgotenquiry: {
    type: Boolean,
    "default": false
  },
  replyfromdoctor: [String],
  chatofdoctorandclient: [String],
  itsanadminaccount: {
    type: Boolean,
    "default": false
  },
  willrefund: {
    type: Boolean,
    "default": false
  },
  messagecountofuser: Number
});
var Credentialssa = mongoose.model("Key", schemacredentials);
console.log('workstill');
var schemamainpagequestions = new mongoose.Schema({
  itsname: String,
  itsemail: String,
  itsquestion: String
});
var Credentialssa2 = mongoose.model("Question", schemamainpagequestions);
var fs = require('fs');
var privateKey = fs.readFileSync("C:\\Users\\ege_g\\Desktop\\mywebsite\\forthekeys\\key.pem", 'utf8'); // Load the private key
var certificate = fs.readFileSync("C:\\Users\\ege_g\\Desktop\\mywebsite\\forthekeys\\cert.pem", 'utf8');
//const privateKey = fs.readFileSync('server.key', 'utf8'); // Load the private key
//const certificate = fs.readFileSync('server.crt', 'utf8');
var credentials = {
  key: privateKey,
  cert: certificate
};
var httpsServer = https.createServer(credentials, app);
var privateKey2 = fs.readFileSync("C:\\Users\\ege_g\\Desktop\\mywebsite\\keyofaxios\\key99.pem", 'utf8');
var certificate2 = fs.readFileSync("C:\\Users\\ege_g\\Desktop\\mywebsite\\keyofaxios\\cert99.pem", 'utf8');
var agent2 = new https.Agent({
  ca: certificate2,
  rejectUnauthorized: false
});
var agent = new https.Agent({
  ca: certificate
});
app.get('/', function (request, respond) {
  // Serve your HTML form here
  respond.sendFile(__dirname + '/views' + '/newformat.html');
});
app.post('/takeiteasy', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var username, name, surname, day, month, year, gender, email, password, confirmPassword, hashedPassword, hashPassword, _hashPassword, product, product2, saveit, payloada;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _hashPassword = function _hashPassword3() {
            _hashPassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var plainPassword;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    plainPassword = password; // Hash the password with bcrypt
                    _context.next = 3;
                    return bcrypt.hash(plainPassword, 10);
                  case 3:
                    hashedPassword = _context.sent;
                    // 10 is the number of salt rounds

                    console.log('Plain Password:', plainPassword);
                    console.log('Hashed Password:', hashedPassword);
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return _hashPassword.apply(this, arguments);
          };
          hashPassword = function _hashPassword2() {
            return _hashPassword.apply(this, arguments);
          };
          username = req.body.usernameonregister;
          name = req.body.nameonregister;
          surname = req.body.surnameonregister;
          day = req.body.day;
          month = req.body.month;
          year = req.body.year;
          gender = req.body.gender;
          email = req.body.emailonregister;
          password = req.body.passworodnregister;
          confirmPassword = req.body.passwordagainonregister;
          console.log(name + 'QWEWQEWQEWQEWQWQ');
          console.log(surname);
          hashedPassword = "";
          hashPassword();
          _context2.next = 18;
          return Credentialssa.findOne({
            username: {
              $regex: new RegExp("^" + req.body.usernameonregister + "$", "i")
            }
          });
        case 18:
          product = _context2.sent;
          _context2.next = 21;
          return Credentialssa.findOne({
            email: {
              $regex: new RegExp("^" + req.body.emailonregister + "$", "i")
            }
          });
        case 21:
          product2 = _context2.sent;
          //let product3 = await Credentialssa.findOne({ password: { $regex: new RegExp("^" + req.body.passworodnregister + "$", "i") } });

          if (product || product2) {
            res.redirect('/emailexist.html');
          } else {
            saveit = new Credentialssa({
              username: req.body.usernameonregister,
              name: req.body.nameonregister,
              surname: req.body.surnameonregister,
              day: req.body.day,
              month: req.body.month,
              year: req.body.year,
              gender: req.body.gender,
              email: req.body.emailonregister,
              password: hashedPassword
            });
            saveit.save();
            payloada = {
              username: username,
              uniqueIdentifier: Date.now()
            };
            res.cookie('userLoggedData', JSON.stringify(payloada), {
              maxAge: 900000,
              httpOnly: false
            });
            res.redirect('/user/' + req.body.nameonregister);
          }
          ;
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var NodeRSA = require('node-rsa');
/*
function generateKeyPair() {
  const key = new NodeRSA({ b: 2048 }); // Adjust key size as needed

  // Generate key pair
  key.generateKeyPair();

  // Export keys
  const publicKey = key.exportKey('pkcs1');
  const privateKey = key.exportKey('pkcs1');

  return { publicKey, privateKey };
}

// Generate key pair
const keys = generateKeyPair();

// Save public and private keys to files
fs.writeFileSync('publicKey_zz.pem', keys.publicKey, 'utf-8');
fs.writeFileSync('privateKey_zz.pem', keys.privateKey, 'utf-8');

console.log('Public and private keys generated and saved.');

*/

/*
const key = new NodeRSA({b: 512});

key.generateKeyPair();
const zz = key.exportKey('pkcs1');
key.importKey(zz, 'pkcs1');*/
//const publicDer = key.exportKey('pkcs8-public');
//const privateDer = key.exportKey('pkcs1');
//console.log(publicDer);
//console.log(privateDer);
//fs.writeFileSync('publicKey_itsme.pem', publicDer, 'utf-8');

//fs.writeFileSync('privateKey_itsme.pem', privateDer, 'utf-8');

app.get('/user/:name', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var namee, getcookieforseekreply, gotthecookie, putonthedb, forpullreplyfromdb, pulledreplyfromdb, pullednamefromdb, putimgsrchere, usernnn;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          namee = req.params.name; //console.log(name);
          getcookieforseekreply = req.cookies.userLoggedData;
          gotthecookie = JSON.parse(getcookieforseekreply);
          putonthedb = gotthecookie.username; //console.log('www',putonthedb);
          _context3.next = 6;
          return Credentialssa.findOne({
            username: putonthedb
          });
        case 6:
          forpullreplyfromdb = _context3.sent;
          if (forpullreplyfromdb) {
            pulledreplyfromdb = forpullreplyfromdb.replyfromdoctor;
            pullednamefromdb = forpullreplyfromdb.name;
            putimgsrchere = forpullreplyfromdb.imagepathfromdb;
            usernnn = forpullreplyfromdb.username;
            console.log(putimgsrchere);
            res.render('userpageloggedejs.ejs', {
              name: namee,
              indname: pullednamefromdb,
              answerhere: pulledreplyfromdb,
              imgsourceloadedforprofile: putimgsrchere,
              usernamep: usernnn
            });
          }
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.post('/user/:name/editingprofileroute', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var editname, editsurname, editemail, editage, editpassword, selectedGender, userLoggedDataParsed, parsedUsername, namesearch, varoneditname;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          editname = req.body.nameinput;
          editsurname = req.body.surnameinput;
          editemail = req.params.emailinput;
          editage = req.body.ageinput;
          editpassword = req.body.passwordinput;
          selectedGender = req.body.gender;
          userLoggedDataParsed = req.cookies.userLoggedData;
          parsedUsername = JSON.parse(userLoggedDataParsed);
          namesearch = parsedUsername.username;
          _context4.next = 11;
          return Credentialssa.findOne({
            username: namesearch
          });
        case 11:
          varoneditname = _context4.sent;
          if (editname) {
            varoneditname.name = editname;
          } else if (editsurname) {
            varoneditname.surname = editsurname;
          } else if (editemail) {
            varoneditname.email = editemail;
          } else if (editage) {
            varoneditname.age = editage;
          } else if (editpassword) {
            varoneditname.password = editpassword;
          } else if (selectedGender) {
            varoneditname.gender = selectedGender;
          }
          _context4.next = 15;
          return varoneditname.save();
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
//const fs = require('fs');
//const fs = require('fs');

var filetypeofpassedimg = "";
function getImageType(_x7) {
  return _getImageType.apply(this, arguments);
}
function _getImageType() {
  _getImageType = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(fileeePath) {
    var readFile, buffer, fileSignature;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          readFile = util.promisify(fs.readFile);
          _context28.next = 4;
          return readFile(fileeePath);
        case 4:
          buffer = _context28.sent;
          fileSignature = buffer.toString('hex', 0, 8);
          if (fileSignature.startsWith('ffd8ffe0') || fileSignature.startsWith('ffd8ffe1')) {
            console.log('File type: JPEG');
            filetypeofpassedimg = true;
          } else if (fileSignature.startsWith('89504e470d0a1a0a')) {
            console.log('File type: PNG');
            filetypeofpassedimg = true;
          }
          // Check for GIF file
          else if (fileSignature.startsWith('47494638')) {
            console.log('File type: GIF');
            filetypeofpassedimg = true;
          } else {
            console.log('Unknown image file type');
            filetypeofpassedimg = false;
          }

          // You can add more checks for other image formats as needed
          _context28.next = 12;
          break;
        case 9:
          _context28.prev = 9;
          _context28.t0 = _context28["catch"](0);
          console.error('Error reading file:', _context28.t0);
        case 12:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 9]]);
  }));
  return _getImageType.apply(this, arguments);
}
console.log(filetypeofpassedimg);
app.post('/take', function (req, res) {
  var enternamesub = req.body.enternamelog;
  var enterpasswordsub = req.body.enterpasswordlog;
  console.log(enterpasswordsub + 'enterpasswordsub');
  function authenticate() {
    return _authenticate.apply(this, arguments);
  }
  function _authenticate() {
    _authenticate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var logproduct, adminsstoredPlainPassword, passwordMatch23, payloada, storedPlainPassword, passwordMatch, _payloada;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return Credentialssa.findOne({
              username: {
                $regex: new RegExp("^" + enternamesub + "$", "i")
              }
            });
          case 3:
            logproduct = _context5.sent;
            if (!(logproduct.itsanadminaccount === true)) {
              _context5.next = 13;
              break;
            }
            console.log('admin account is true');
            adminsstoredPlainPassword = logproduct.password;
            _context5.next = 9;
            return bcrypt.compare(enterpasswordsub, adminsstoredPlainPassword);
          case 9:
            passwordMatch23 = _context5.sent;
            payloada = {
              username: enternamesub,
              uniqueIdentifier: Date.now()
            };
            res.cookie('userLoggedData', JSON.stringify(payloada), {
              maxAge: 900000,
              httpOnly: false
            });
            if (passwordMatch23) {
              res.redirect('/manager/' + enternamesub + '?' + 'success=true');
            } else {
              console.log('Admin authentication is failed');
            }
          case 13:
            if (!(logproduct.itsanadminaccount === false)) {
              _context5.next = 24;
              break;
            }
            console.log('HERE YOU ARE');
            storedPlainPassword = logproduct.password;
            _context5.next = 18;
            return bcrypt.compare(enterpasswordsub, storedPlainPassword);
          case 18:
            passwordMatch = _context5.sent;
            _payloada = {
              username: enternamesub,
              uniqueIdentifier: Date.now()
            };
            res.cookie('userLoggedData', JSON.stringify(_payloada), {
              maxAge: 900000,
              httpOnly: false
            });
            if (passwordMatch) {
              res.redirect('/user/' + enternamesub + '?' + 'success=true');
            } else {
              console.log('Authentication failed');
            }
            _context5.next = 25;
            break;
          case 24:
            console.log('User not found');
          case 25:
            _context5.next = 30;
            break;
          case 27:
            _context5.prev = 27;
            _context5.t0 = _context5["catch"](0);
            console.error('Error during authentication:', _context5.t0);
          case 30:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 27]]);
    }));
    return _authenticate.apply(this, arguments);
  }
  authenticate();
});
app.get('/manager/:name', function (req, res) {
  if (req.cookies.userLoggedData) {
    var name = req.params.name;
    res.render('adminpageejs.ejs', {
      name: name
    });
  }
});

/*
app.get('/user/:name', (req,res) => {
  res.render('userpageloggedejs.ejs', {name:enternamesub})
})*/

var storage2 = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, path.join(__dirname, 'serverdocumentss'));
  },
  filename: function filename(req, file, cb) {
    // const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + file.originalname);
  }
});
var upload2 = multer({
  storage: storage2
});
app.post('/user/:name/routeofenquiry', upload2.any(), /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var usingcookie, usingcookie2, usingcookie3, usingcookie4, texttodb, takefilenameforenquiry, takefilenameforenquiry2, takenfilenameforenquiry3;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          usingcookie = req.cookies.userLoggedData;
          usingcookie2 = JSON.parse(usingcookie);
          usingcookie3 = usingcookie2.username;
          _context6.next = 5;
          return Credentialssa.findOne({
            username: {
              $regex: new RegExp("^" + usingcookie3 + "$", "i")
            }
          });
        case 5:
          usingcookie4 = _context6.sent;
          texttodb = req.body.inquiry;
          if (texttodb) {
            usingcookie4.enquiryy.push(texttodb);
          }
          takefilenameforenquiry = req.files[0].path;
          _context6.next = 11;
          return getImageType(takefilenameforenquiry);
        case 11:
          console.log('GotImageConsole', filetypeofpassedimg);
          takefilenameforenquiry2 = req.files[0];
          takenfilenameforenquiry3 = takefilenameforenquiry2.filename;
          if (filetypeofpassedimg === true) {
            usingcookie4.enquiryimagepathfromdb = takenfilenameforenquiry3;
          } else {
            console.log('QWEWEQEW');
          }
          usingcookie4.hasgotenquiry = true;
          _context6.next = 18;
          return usingcookie4.save();
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}());
app.post('/formofrecover', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var emailforrecover, emailrec, _emailrec;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _emailrec = function _emailrec3() {
            _emailrec = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var mailing, foundedemail, payload;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    mailing = /*#__PURE__*/function () {
                      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                        var transporter, info;
                        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                          while (1) switch (_context7.prev = _context7.next) {
                            case 0:
                              transporter = nodemailer.createTransport({
                                host: 'smtp-relay.brevo.com',
                                port: 587,
                                secure: false,
                                tls: {
                                  minVersion: 'TLSv1.2'
                                },
                                auth: {
                                  user: 'ege_gurel35@hotmail.com',
                                  pass: '9awfPxqL5O8D4E7g'
                                }
                              });
                              _context7.next = 3;
                              return transporter.sendMail({
                                from: 'ege_gurel35@hotmail.com',
                                to: 'egegurel10035@gmail.com',
                                subject: 'testinnode',
                                text: "Hello world?",
                                html: '<a href="https://127.0.0.1:443/recoverpageofpass.html">Click here to reset your email</a>'
                              });
                            case 3:
                              info = _context7.sent;
                              console.log("Message sent: %s", info.messageId);
                            case 5:
                            case "end":
                              return _context7.stop();
                          }
                        }, _callee7);
                      }));
                      return function mailing() {
                        return _ref6.apply(this, arguments);
                      };
                    }();
                    console.log('trying is works');
                    _context8.next = 5;
                    return Credentialssa.findOne({
                      email: {
                        $regex: new RegExp("^" + emailforrecover + "$", "i")
                      }
                    });
                  case 5:
                    foundedemail = _context8.sent;
                    if (foundedemail) {
                      payload = {
                        email: emailforrecover,
                        uniqueIdentifier: Date.now()
                      };
                      res.cookie('storedData', JSON.stringify(payload), {
                        maxAge: 900000,
                        httpOnly: true
                      });
                      res.send('Cookie has been set');
                    } else {
                      console.log('email not exist, enter an existed email please ');
                    }
                    mailing();
                    _context8.next = 13;
                    break;
                  case 10:
                    _context8.prev = 10;
                    _context8.t0 = _context8["catch"](0);
                    console.error('Error on finding email');
                  case 13:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, null, [[0, 10]]);
            }));
            return _emailrec.apply(this, arguments);
          };
          emailrec = function _emailrec2() {
            return _emailrec.apply(this, arguments);
          };
          console.log('post is worked');
          emailforrecover = req.body.enterrecovermail;
          console.log('this is email inputted', emailforrecover);
          _context9.next = 7;
          return emailrec();
        case 7:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}());
app.post('/ontherecoveringpass', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var storedData, parsedData, email, updatingpass, newPassword;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          storedData = req.cookies.storedData;
          if (!storedData) {
            _context10.next = 17;
            break;
          }
          parsedData = JSON.parse(storedData);
          email = parsedData.email;
          _context10.next = 6;
          return Credentialssa.findOne({
            email: {
              $regex: new RegExp("^" + email + "$", "i")
            }
          });
        case 6:
          updatingpass = _context10.sent;
          if (!updatingpass) {
            _context10.next = 17;
            break;
          }
          console.log('this is updating pass verification that works okey', updatingpass);
          newPassword = req.body.recoveringmypass2;
          _context10.next = 12;
          return bcrypt.hash(newPassword, 10);
        case 12:
          hashedPassword2 = _context10.sent;
          updatingpass.password = hashedPassword2;
          _context10.next = 16;
          return updatingpass.save();
        case 16:
          res.status(200);
        case 17:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}());
app.get('/fetchedAllNotReadedUsers/getTheirInfos', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var usersss;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Credentialssa.find({
            hasgotenquiry: true
          });
        case 2:
          usersss = _context11.sent;
          res.json(usersss);
          console.log('PPPPPPPPPPPPPPPP');
        case 5:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function (_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}());
app.get('/tw/parsetherefundeds', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var usersss2;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Credentialssa.find({
            willrefund: true
          });
        case 2:
          usersss2 = _context12.sent;
          res.json(usersss2);
        case 4:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function (_x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}());
app.get("/fetchedAllUsersPath/getUsers", /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var Credentialssa, users;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          Credentialssa = mongoose.model("Key", schemacredentials);
          _context13.next = 3;
          return Credentialssa.find({});
        case 3:
          users = _context13.sent;
          console.log('QQQQQQQQQQQQQ');
          res.json(users);
        case 6:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function (_x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}());
app.get("/fetchusersforchat/gimmeUsers", /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var Credentialssa, usersjsonenquiry;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          Credentialssa = mongoose.model("Key", schemacredentials);
          _context14.next = 3;
          return Credentialssa.find({
            hasgotenquiry: true
          });
        case 3:
          usersjsonenquiry = _context14.sent;
          res.json(usersjsonenquiry);
        case 5:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function (_x20, _x21) {
    return _ref11.apply(this, arguments);
  };
}());
app.post("/apiapiapi/sendDataForReply", /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var requestData, beforewritingtoreplyfromdoc, zz;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          requestData = req.body;
          beforewritingtoreplyfromdoc = "";
          beforewritingtoreplyfromdoc = requestData.takenvaluefromdoctodb;
          _context15.next = 5;
          return Credentialssa.findOne({
            username: {
              $regex: new RegExp("^" + requestData.data + "$", "i")
            }
          });
        case 5:
          zz = _context15.sent;
          zz.replyfromdoctor = beforewritingtoreplyfromdoc;
          _context15.next = 9;
          return zz.save();
        case 9:
          console.log('this is zzzz');
        case 10:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function (_x22, _x23) {
    return _ref12.apply(this, arguments);
  };
}());
app.post("/qwq/routeofrefunded", /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var requestDataData, dddbqry;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          requestDataData = req.body;
          _context16.next = 3;
          return Credentialssa.findOne({
            username: requestDataData.useruser2
          });
        case 3:
          dddbqry = _context16.sent;
          dddbqry.willrefund = requestDataData.boolofrefund2;
          dddbqry.enquiryisnotreaded = requestDataData.clicktruereverse;
          _context16.next = 8;
          return dddbqry.save();
        case 8:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function (_x24, _x25) {
    return _ref13.apply(this, arguments);
  };
}());
app.post("/myfetchapiforchat/bringthechat", /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var reqDataData, recordname, pushthemessage1, databaseqqq;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          reqDataData = req.body;
          recordname = "";
          recordname = reqDataData.nameofuseronchat;
          pushthemessage1 = reqDataData.messagecontentofchat;
          console.log(recordname);
          _context17.prev = 5;
          _context17.next = 8;
          return Credentialssa.findOne({
            username: reqDataData.nameofuseronchat
          });
        case 8:
          databaseqqq = _context17.sent;
          if (recordname) {
            funcofchathistory(recordname);
          }
          if (!databaseqqq) {
            _context17.next = 17;
            break;
          }
          databaseqqq.chatofdoctorandclient.push('D::::' + pushthemessage1);
          _context17.next = 14;
          return databaseqqq.save();
        case 14:
          return _context17.abrupt("return", res.status(200).json({}));
        case 17:
          console.log('issue');
        case 18:
          _context17.next = 24;
          break;
        case 20:
          _context17.prev = 20;
          _context17.t0 = _context17["catch"](5);
          console.error("Error processing request:", _context17.t0);
          res.status(500).json({
            error: "Internal Server Error"
          });
        case 24:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[5, 20]]);
  }));
  return function (_x26, _x27) {
    return _ref14.apply(this, arguments);
  };
}());
var usernameforchathistory = "";
function funcofchathistory(nameqp) {
  usernameforchathistory = nameqp;
  console.log('this is func of chat ', usernameforchathistory);
}
console.log(usernameforchathistory);
app.post('/fetchfordisplay/fetchfordisplay2', /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var usname2, deducta, deducta2, deducta3;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          usname2 = req.body;
          deducta = usname2.nametakentakentaken2;
          console.log('deductadeductadeductadeducta', deducta);
          _context18.next = 5;
          return Credentialssa.findOne({
            username: deducta
          });
        case 5:
          deducta2 = _context18.sent;
          deducta2.messagecountofuser = 0;
          _context18.next = 9;
          return deducta2.save();
        case 9:
          deducta3 = deducta2.chatofdoctorandclient;
          functionbeforedisplay(deducta3);
          res.status(200).json(deducta3);
        case 12:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function (_x28, _x29) {
    return _ref15.apply(this, arguments);
  };
}());
/*
async function functionbeforedisplay(deducta3){

   
    console.log('deducta3deducta3deducta3deducta3deducta3deducta3deducta3',deducta3);
   await fetch('/herethechat/hereherechat', { method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify( {deducta3} )
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        // Handle success if needed
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error if needed
    })
  }*/
var deducta40 = "";
function functionbeforedisplay(deducta3) {
  deducta40 = deducta3;
  axios.get('https://127.0.0.1:443/herethechat/hereherechat', {
    httpsAgent: agent2
  }).then(function (response) {
    // handle success
    console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', response.data);
  })["catch"](function (error) {
    // handle error
    console.log(error);
  }).then(function () {
    // always executed
  });

  /*
  const options = {
    hostname: '127.0.0.1',
    port: 443,
    path: '/herethechat/hereherechat',
    method: 'GET',
     agent: agent2 }
      const req = https.request(options, (res) => {
        // This callback can be empty since you don't need to process the response.
        //res.json(deducta40);
      });
    
      req.on('error', (error) => {
        console.error('Error triggering the route:', error);
      });
    */
}
app.get('/herethechat/hereherechat', /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          console.log('DEDUCTA40DEDUCTA40DEDUCTA40DEDUCTA40DEDUCTA40DEDUCTA40DEDUCTA40DEDUCTA40DEDUCTA40DEDUCTA40DEDUCTA40DEDUCTA40DEDUCTA40', deducta40);

          // res.json(deducta40);
          res.status(200).json(deducta40);
        case 2:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function (_x30, _x31) {
    return _ref16.apply(this, arguments);
  };
}());
var chatliftedaccordingly2 = "";
app.post('/fornamelayoutchat/secondpartofroute', /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var usernameofchat, deductchatfromdb, chatliftedaccordingly, deductchatfromdbun;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          usernameofchat = req.body;
          console.log('Console foR Inspect', usernameofchat.myvalueqqq2);
          _context20.next = 4;
          return Credentialssa.findOne({
            username: usernameofchat.myvalueqqq2
          });
        case 4:
          deductchatfromdb = _context20.sent;
          chatliftedaccordingly = deductchatfromdb.chatofdoctorandclient;
          deductchatfromdbun = deductchatfromdb.username;
          chatliftedaccordingly2 = chatliftedaccordingly;
          console.log('deduct from chat ', deductchatfromdbun);
          if (!deductchatfromdb) {
            _context20.next = 13;
            break;
          }
          initiatelayout(deductchatfromdbun);
          parsethechat(chatliftedaccordingly);
          return _context20.abrupt("return", res.status(200).json({}));
        case 13:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function (_x32, _x33) {
    return _ref17.apply(this, arguments);
  };
}());
var usname = "";
var chthistory2 = "";
function parsethechat(chthistory) {
  chthistory2 = chthistory;
}
var EventEmitter2 = /*#__PURE__*/function (_EventEmitter) {
  _inherits(EventEmitter2, _EventEmitter);
  function EventEmitter2() {
    _classCallCheck(this, EventEmitter2);
    return _callSuper(this, EventEmitter2, arguments);
  }
  return _createClass(EventEmitter2);
}(EventEmitter);
var eventEmitter2 = new EventEmitter2();
var trueorfalsevar = "false";
var usersnameformessages = "";
function initiatelayout(usernameforch) {
  usersnameformessages = usernameforch;
  if (usersnameformessages) {
    trueorfalsevar = true;
    eventEmitter2.emit('trigger-it');
    console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
  }
  console.log('usersnameformessages is works', usersnameformessages);
}
eventEmitter2.on('trigger-it', function () {
  axios.get('https://127.0.0.1:443/layoutchat/layitchatout', {
    httpsAgent: agent
  }).then(function (response) {
    // handle success
    console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', response.data);
  })["catch"](function (error) {
    // handle error
    console.log(error);
  }).then(function () {
    // always executed
  });
  console.log('axios is worked_________');
});
app.get("/layoutchat/layitchatout", /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var takeforusage, usersmessages;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          console.log('layout chat api is works');
          if (!(trueorfalsevar === true)) {
            _context21.next = 14;
            break;
          }
          console.log('in the app.get33333333333333333333333333333333333333333333');
          console.log('right under initiatelayout function', usersnameformessages);
          _context21.next = 6;
          return Credentialssa.findOne({
            username: usersnameformessages
          });
        case 6:
          takeforusage = _context21.sent;
          console.log('this is under takeforusage variable', takeforusage);
          console.log('Yes take for usage');
          usersmessages = takeforusage.chatofdoctorandclient;
          console.log(usersmessages);
          res.json(usersmessages);
          _context21.next = 15;
          break;
        case 14:
          console.log('JUST ELSE');
        case 15:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function (_x34, _x35) {
    return _ref18.apply(this, arguments);
  };
}());
app.post("/myfetchapiforchat2/bringthechatofuser", /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var reqreqreqData, basedatabase, pushthemessage2;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          reqreqreqData = req.body;
          _context22.next = 3;
          return Credentialssa.findOne({
            username: reqreqreqData.nameofuseronchat2
          });
        case 3:
          basedatabase = _context22.sent;
          pushthemessage2 = reqreqreqData.messagecontentofchat2;
          basedatabase.chatofdoctorandclient.push('U::::' + pushthemessage2);
          basedatabase.messagecountofuser += reqreqreqData.councount;
          _context22.next = 9;
          return basedatabase.save();
        case 9:
          res.status(200).json({});
        case 10:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function (_x36, _x37) {
    return _ref19.apply(this, arguments);
  };
}());
app.post("/routeofaskedquestionsonmainpage", /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var xzxz;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          xzxz = new Credentialssa2({
            itsname: req.body.mainpagequestionname,
            itsemail: req.body.askingquestionsidemail,
            itsquestion: req.body.askingquestionsidquestion
          });
          _context23.next = 4;
          return xzxz.save();
        case 4:
          _context23.next = 9;
          break;
        case 6:
          _context23.prev = 6;
          _context23.t0 = _context23["catch"](0);
          console.error(_context23.t0);
        case 9:
          ;
        case 10:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 6]]);
  }));
  return function (_x38, _x39) {
    return _ref20.apply(this, arguments);
  };
}());
app.get('/user/:name/routeofchatchat', /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var minecookie, minecookie2, minecookie3, minecookie4, minecookie5;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          console.log('YOU ARE UNDER ROUTEOFCHATCHAT');
          minecookie = req.cookies.userLoggedData;
          minecookie2 = JSON.parse(minecookie);
          minecookie3 = minecookie2.username;
          _context24.next = 6;
          return Credentialssa.findOne({
            username: minecookie3
          });
        case 6:
          minecookie4 = _context24.sent;
          minecookie5 = minecookie4.chatofdoctorandclient;
          res.json(minecookie5);
        case 9:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function (_x40, _x41) {
    return _ref21.apply(this, arguments);
  };
}());
app.post("/lll/routeofreaded", /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var requestData2, dbqry;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          requestData2 = req.body;
          _context25.next = 3;
          return Credentialssa.findOne({
            username: requestData2.useruser
          });
        case 3:
          dbqry = _context25.sent;
          dbqry.enquiryisnotreaded = requestData2.boolofnotreaded;
          dbqry.enquiryisreaded = true;
          _context25.next = 8;
          return dbqry.save();
        case 8:
          sendreadeddocsfunc(dbqry);
          //res.status(200).json({ result });
        case 9:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function (_x42, _x43) {
    return _ref22.apply(this, arguments);
  };
}());
var wqwqwq = "";
function sendreadeddocsfunc(ttt) {
  var queryoverit = ttt;
  var useruserusername = queryoverit.username;
  wqwqwq = useruserusername;
}
app.get("/ppp/routeforforreaded", /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.next = 2;
          return Credentialssa.find({
            enquiryisreaded: true
          });
        case 2:
          wwuser = _context26.sent;
          res.json(wwuser);
        case 4:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }));
  return function (_x44, _x45) {
    return _ref23.apply(this, arguments);
  };
}());
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, path.join(__dirname, 'uploadedphotoss'));
  },
  filename: function filename(req, file, cb) {
    var fileExtension = path.extname(file.originalname);
    // const filenameonmulter = file.originalname + Date.now()+ '-' +fileExtension
    cb(null, file.originalname + Date.now() + '-' + fileExtension);
  }
});
var upload = multer({
  storage: storage
});
app.post('/user/:name/uploadingphotoroute', upload.any(), /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var usingcookie, usingcookie2, usingcookie3, usingcookie4, uploadedFile, filenameonmulter;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          if (!req.files) {
            _context27.next = 15;
            break;
          }
          usingcookie = req.cookies.userLoggedData;
          usingcookie2 = JSON.parse(usingcookie);
          usingcookie3 = usingcookie2.username;
          _context27.next = 6;
          return Credentialssa.findOne({
            username: {
              $regex: new RegExp("^" + usingcookie3 + "$", "i")
            }
          });
        case 6:
          usingcookie4 = _context27.sent;
          //  const uploadedFileName = req.files[0].originalname;
          uploadedFile = req.files[0]; //  usingcookie4.imagepathfromdb = uploadedFileName;
          //const uploadedFile = req.files[0].originalname;
          filenameonmulter = uploadedFile.filename;
          usingcookie4.imagepathfromdb = filenameonmulter;
          _context27.next = 12;
          return usingcookie4.save();
        case 12:
          res.send('File(s) uploaded successfully');
          _context27.next = 16;
          break;
        case 15:
          res.status(400).send('No file uploaded');
        case 16:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function (_x46, _x47) {
    return _ref24.apply(this, arguments);
  };
}());
app.use(function (err, req, res, next) {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading
    console.log(err);
    res.status(500).send('Multer error occurred');
  } else {
    next(err);
  }
});

/*
const options0000 = {
  key: fs.readFileSync('./server.key','utf8'),
  cert: fs.readFileSync('./server.crt','utf8'),
  secureProtocol: 'TLSv1_2_method'
  
};*/

//myserver = http.createServer();

var io2 = io(httpsServer, {
  path: '/socket.io',
  cors: {
    origin: "https://127.0.0.1",
    methods: ["GET", "POST"]
  }
});

/*
const my_server = https2.createServer(options0000, app, { cors: {
  origin: 'https://127.0.0.1:8443',
  methods: ["GET", "POST"],
  credentials: true ,
   // Enable credentials
}})
const io2 = io(my_server);



const mailPort = 8443;

my_server.listen(mailPort, () => {
  console.log(`Mail server is running on port ${mailPort}`);
});
*/

var mymsg = "";
io2.on('connection', function (socket) {
  console.log('A user connected');
  socket.on('chat-message', function (data) {
    console.log('Message received:', data);
    socket.emit('chat-message', data);
    mymsg = data;
    socket.emit('chat-message3', mymsg);
    console.log('mymsg', mymsg);
    mymsg = "";
    console.log('BOTH is Working');
  });
  socket.on('chat-message7', function (message) {
    socket.emit('chat-message7', message);
  });
  socket.on('chat-message98', function (message) {
    socket.broadcast.emit('chat-message17', message);
  });
  socket.on('chat-message99', function (message) {
    socket.broadcast.emit('chat-message96', message);
  });
  socket.on('disconnect', function () {
    console.log('User disconnected');
  });
});
io2.on('chat-message2', function (socket3) {
  socket3.emit('chat-message2', message);
  console.log('This is chat-message2 consolelog');
});

/*io2.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('response', (msg) => {
      console.log('Received message:', msg);
    
   
      // Process the message

      // Send a response
     //socket.emit('response', 'Message received successfully');
  });

  socket.on('disconnect', () => {
      console.log('User disconnected');
  });
});
*/

//myserver.listen(3000,() => {console.log('listening on 3000');});
/*http2Express({
  expressApp: app,
  http2: http2,
  httpsOptions: credentials
});*/

//httpsServer httpsServer.listen(443,...)
httpsServer.listen(443, function () {
  console.log('HTTPS server is running on port 443');
});
