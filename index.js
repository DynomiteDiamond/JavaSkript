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
        this.throwvar();
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
        this.throwvar();
    },
  	temp: [{
        a: null,
        b: null
    }],
    throwvar: function(){
        this.temp.a = null;
        this.temp.b = null;
    },
    error: function (string) {
        console.log('JavaSkript Error: ' + string);
    },
    read: function (file){
        var reader = new FileReader();
        reader.onload = function(progressEvent){
            var lines = this.result.split('\n');
            for(var line = 0; line < lines.length; line++){
                javaskript.run(lines[line]);
            }
        };
        reader.readAsText(file);
    },
    variables:[],
    setvar: function(name,object){
       this.variables[name] = object;
    },
    getvar: function(name){
        return this.variables[name]   
    },
    delvar: function(name){
        this.variables[name] = undefined;   
    }
};
function JavaSkriptEngine(){
   this.engine = javaskript;
}
