//bind start
var person = {
  firstname: 'Eating',
  lastname: 'Shieh',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function() {
  console.log('logged: ' + this.getFullName());
}

var logPersonName = logName.bind(person);
logPersonName();

// callback with bind
let greet = function(fn) {
  fn();
};

let person = {
  name: 'Eaaatingggg',
  hello: function(){
    console.log(`Hello ${this.name}`);
  },
  sayHello: function(){
    greet(this.hello.bind(this));
  }
};

person.sayHello();

let newPerson = {
  name: 'Eaaatingggg',
  sayHello: function(){
    greet(
      () => console.log(`Hello ${this.name}`)
    );
  }
};

newPerson.sayHello();
//bind end
