var engine = new JavaSkriptEngine();
engine.engine.add('alert', function (args) {
    if (['alert the message ', 'alert a message ', 'alert message ', 'alert '].includes(args[0])) {
        if ([' to the player', ''].includes(args[2])) {
            alert(args[1]);
        } else {
            engine.engine.error('Argument 3 is invalid');
        }
    } else {
        engine.engine.error('Argument 1 is invalid');
    }
});
engine.engine.add('log', function (args) {
    if (['log the message ', 'log a message ', 'log message ', 'log '].includes(args[0])) {
        if ([' to the console', ''].includes(args[2])) {
            console.log(args[1]);
        } else {
            engine.engine.error('Argument 3 is invalid');
        }
    } else {
        engine.engine.error('Argument 1 is invalid');
    }
});
