var Linter = require('eslint').Linter
var linter = new Linter()
var asert = require('assert')

var config = require('../eslint-config-npmpty')

describe('eslint-config-npmpty', function() {

	it('validates against given rules.', function() {

		var text = 'const foo = \'bar\'\n'

		asert(linter.verify(text, config).length === 0)

	})
	
})
