> **WARNING**
***This is an unstable build, in Alpha 1.0.2***

Usage:
    
    javaskript.create("alert", /*command name*/ function(args){
    	alert(args[1])
    } /*function runner*/

alert the command "Hey! This is a command!" to the website

More advanced measures can be taken, but this is all up to the developer.

Professional Example:

    javaskript.add('log', function (args) {
    	if (['log the message ', 'log a message ', 'log message ', 'log '].includes(args[0])) {
    		if ([' to the console', ''].includes(args[2])) {
    			console.log(args[1]);
    		} else {
    			javaskript.error('Argument 3 is invalid');
    		}
    	} else {
    		javaskript.error('Argument 1 is invalid');
    	}
    });


----------


Needs:

	if condition
	else
	else if condition
	on event
	Better Argument Seperation
	
How to download -
[Click Here!](https://www.cubemc.online/JavaSkript/javaskript.js "Cube JavaSkript")
