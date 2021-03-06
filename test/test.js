#!/usr/bin/env node

var fs = require("fs");
var browserify = require('browserify');
var lessify = require("../index");
var assert = require("assert");

var sampleLESS = __dirname + "/styles.less";
var sampleCSS = __dirname + "/styles.css";

var b = browserify();
b.add(sampleLESS);
b.add(sampleCSS);
b.transform(lessify);

b.bundle(function (err, src) {
	if (err) {
		assert.fail(err);
	}
	assert.ok(src);
});