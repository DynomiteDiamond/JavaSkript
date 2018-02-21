var javaskript = {
    add: function (name, func) {
        if (typeof func === 'function') {
            if (typeof name === 'string' || name instanceof String) {
                if (this.commands[name] !== undefined) {
                    this.error('Command "' + name + '"Already Exists!');
                } else {
                    this.commands[name] = func;
                }
            } else {
                this.error('Argument 1 is not a String');
            }
        } else {
            this.error('Argument 2 is not a Function');
        }
        this.throwvar();
    },
    addAdvanced: function(string,func,replacer){ /*Not done*/
        string = string.split('"');
        string.forEach(function(item,index){
           item.replace(new RegExp(replacer, 'g'), ' '); 
           string[index] = item;
        });
        this.temp.a = str.slice(0, string.shift().split(" ").shift().length);
        if (this.commands[this.temp.a] !== undefined || this.commands[this.temp.a] !== null) {
            
        } else {
            this.error("Command Already Exists!")
        }
    },
  	commands: [], 
  	run: function (string) {
        string = string.split('"'); /*Coming Soon - Better Breakdown of Strings*/
        this.temp.a = string[0].split(" ").shift();
        this.temp.b = this.commands[javaskript.temp.a];
        if (this.temp.b !== undefined) {
            this.temp.b(string);
        } else {
            this.error('Command Not Found.');
        }
        this.throwvar();
    },
    runSolid: function(string,name){
        this.temp.b = this.commands[name];
        if (this.temp.b !== undefined) {
            this.temp.b(string);
        } else {
            this.error('Command Not Found.');
        }
        this.throwvar();
    }
    delete: function(command){
        if (this.commands[command] === undefined || this.commands[command] === null){
            this.error("Command Doesn't Exist.")   
        } else {
            this.commands[command] = undefined;   
        }
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
                this.run(lines[line]);
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
JavaSkriptEngine.prototype.update = function(system){
    this.engine = system;   
}
