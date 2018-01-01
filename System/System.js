var javaskript = {
    add: function (name, func) {
        if (typeof func === 'function') {
            if (typeof name === 'string' || name instanceof String) {
                if (javaskript.commands[name] !== undefined) {
                    this.error('Command "' + name + '"Already Exists');
                } else {
                    javaskript.commands[name] = func;
                }
            } else {
                this.error('Argument 1 is not a String');
            }
        } else {
            this.error('Argument 2 is not a Function');
        }
    },
  	commands: [], 
  	run: function (string) {
        string = string.split('"'); //Coming Soon - Better Breakdown of Strings
        this.temp.a = string[0].split(" ")
            .shift();
        this.temp.b = this.commands[javaskript.temp.a];
        if (this.temp.b !== undefined) {
            this.temp.b(string);
        } else {
            this.error('No command found.');
        }
    },
  	temp: {
        a: null,
        b: null
    },
    error: function (string) {
        console.log('JavaSkript Error: ' + string);
    }
};
