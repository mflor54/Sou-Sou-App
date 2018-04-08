var db = require('../db/index');
var queries = require('../db/queries');


let user1 = {
  first_name: 'user1',
  last_name: 'user_1',

}

//create an object that mimics req.body
let group1 = {
  //this is the response you would get from the body
  body: {
    groupName: "Spending Money",
    totalMembers: 5,
    creator: 1,
    payinAmount: 25,
    payoutAmount: 125,
    frequency: "Weekly",
    description: "For shopping and food"
  }
}
let group2 = {
  //this is the response you would get from the body
  body: {
    groupName: "Savings Warriors",
    totalMembers: 3,
    creator: 2,
    payinAmount: 100,
    payoutAmount: 300,
    frequency: "Monthly",
    description: "Saving so freaking Hard!"
  }
}
let group3 = {
  //this is the response you would get from the body
  body: {
    groupName: "Moving",
    totalMembers: 9,
    creator: 3,
    payinAmount: 250,
    payoutAmount: 2250,
    frequency: "Monthly",
    description: "Security and deposit for apartments"
  }
}
let group4 = {
  //this is the response you would get from the body
  body: {
    groupName: "Party Favors",
    totalMembers: 5,
    creator: 4,
    payinAmount: 100,
    payoutAmount: 500,
    frequency: "monthly",
    description: "Have a random party"
  }
}
let group5 = {
  //this is the response you would get from the body
  body: {
    groupName: "Car Note",
    totalMembers: 9,
    creator: 5,
    payinAmount: 30,
    payoutAmount: 225,
    frequency: "weekly",
    description: "Need help with your car note?"
  }
}

let group6 = {
  //this is the response you would get from the body
  body: {
    groupName: "Electronic Envy",
    totalMembers: 9,
    creator: 9,
    payinAmount: 62.50,
    payoutAmount: 500,
    frequency: "weekly",
    description: "Quick paying savings for toys"
  }
}

let group7 = {
  //this is the response you would get from the body
  body: {
    groupName: "Lets Get a Car",
    totalMembers: 9,
    creator: 9,
    payinAmount: 625,
    payoutAmount: 5000,
    frequency: "Monthly",
    description: "Down payment for a new car"
  }
}


//create a mock response. nothing has to go inside
let resMock = {
  // send function
  send: function() {
    
  },
  //res.status in a function
  status: function() {
    //returns a json object
    return {
      json: function() {
        //this is a mock response and nothing needs to go inside.
      },
      send: function() {

      }
    }
  }
}

//create the mock next (in this case is our .catch)
let next = (err) => {
  console.log(err);
}


queries.createUser({
  body: {
    firstName: 'user1',
    lastName: 'last1',
    username: 'user1',
    email: 'mflor54+user1@gmail.com',
    password: 'password'
  }
}, resMock);
queries.createUser({
  body: {
    firstName: 'user2',
    lastName: 'last2',
    username: 'user2',
    email: 'mflor54+user2@gmail.com',
    password: 'password'
  }
}, resMock);
queries.createUser({
  body: {
    firstName: 'user3',
    lastName: 'last3',
    username: 'user3',
    email: 'mflor54+user3@gmail.com',
    password: 'password'
  }
}, resMock)
queries.createUser({
  body: {
    firstName: 'user4',
    lastName: 'last4',
    username: 'user4',
    email: 'mflor54+user4@gmail.com',
    password: 'password'
  }
}, resMock);
queries.createUser({
  body: {
    firstName: 'user5',
    lastName: 'last5',
    username: 'user5',
    email: 'mflor54+user5@gmail.com',
    password: 'password'
  }
}, resMock);

//pass all 3 into the query

queries.createGroup(group1, resMock, next);
queries.createGroup(group2, resMock, next);
queries.createGroup(group3, resMock, next);
queries.createGroup(group4, resMock, next);
queries.createGroup(group5, resMock, next);

//run the file in with node in the terminal. Test by reading the errors and correcting the queries.
//Check the database --> did the data save correctly?

let join1 = {
  body: {
    groupID: 3,
    userID: 2
  }
}

// queries.userJoinGroup(join1, resMock, next);
