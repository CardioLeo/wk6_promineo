// This code is taken from Robin Nixon's book: Learning PHP, MySQL & JavaScript
//
//
//

function User(forename, username, password) {
	this.forename = forename
	this.username = username
	this.password = password

	this.showUser = function() {
		document.write("Forename: " + this.forename + "<br>")
		document.write("Username: " + this.username + "<br>")
		document.write("Password: " + this.password + "<br>")
	}
}

// alternative method 1

function User2(forename2, username2, password2) {
	this.forename2 = forename2
	this.username2 = username2
        this.password2 = password2
	this.showUser2 = showUser2
}

function showUser2() {
	document.write("Forename2: " + this.forename2 + "<br>")
	document.write("Username2: " + this.username2 + "<br>")
	document.write("Password2: " + this.password2 + "<br>")
}

details = new User2("Wolfgang", "w.a.mozart", "composer")

// alternative method 2, replacing the function showUser2()

details2 = new User2()
details2.forename2 = "Wolfgang"
details2.username2 = "w.a.mozart"
details2.password2 = "composer"

// add new properties like this:

details2.greeting = "Hello"

// verify new properties:

document.write(details.greeting)

// accessing objects

name = details.forename
if (details.username == "Admin") loginAsAdmin()

// call function

details.showUser()

// output
// Forename: Wolfgang
// Username: w.a.mozart
// Password: composer

// -- -- --

// using prototype can save a lot of memory

this.showUser3 = function()

// can be replaced with:

User.prototype.showUser3 = function()

// compare:

function User(forename3, username3, password3) {
	this.forename3 = forename3
	this.username3 = username3
	this.password3 = username3

	User.prototype.showUser3 = function() {
		document.write("Forename3: " + this.forename3 + "<br>")
		document.write("Username3: " + this.username3 + "<br>")
		document.write("Password3: " + this.password3 + "<br>")
	}
}

User.prototype.greeting = "Hello"
document.write(details.greeting)

//

User.prototype.showUser = function() {
	document.write("Name " + this.forename +
		       "User " + this.username +
		       "Pass " + this.password)
}

details.showUser()

//

String.prototype.nbsp = function() {
	return this.replace(/ / g, '&nbsp;')
}

document.write("The quick brown fox".nbsp())

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, '')
}

document.write("  Please trim me   ".trim())
