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
    groupName: "Living Single",
    totalMembers: 3,
    creator: 9,
    payinAmount: 200,
    payoutAmount: 400,
    frequency: "Monthly",
    description: "Monthly Living"
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
    creator: 4,
    payinAmount: 62.50,
    payoutAmount: 500,
    frequency: "weekly",
    description: "Quick paying savings for toys"
  }
}

let group7 = {
  //this is the response you would get from the body
  body: {
    groupName: "Spending Money",
    totalMembers: 5,
    creator: 6,
    payinAmount: 25,
    payoutAmount: 125,
    frequency: "Weekly",
    description: "For shopping and food"
  }
}
let group8 = {
  //this is the response you would get from the body
  body: {
    groupName: "Student Loan... Ugh",
    totalMembers: 5,
    creator: 12,
    payinAmount: 750,
    payoutAmount: 3000,
    frequency: "Monthly",
    description: "Student loans? What part of the game is this?"
  }
}
let group9 = {
  //this is the response you would get from the body
  body: {
    groupName: "Budget Club",
    totalMembers: 3,
    creator: 7,
    payinAmount: 50,
    payoutAmount: 100,
    frequency: "Weekly",
    description: "Saving money with penny pinchers"
  }
}
let group10 = {
  //this is the response you would get from the body
  body: {
    groupName: "Vacay....",
    totalMembers: 5,
    creator: 8,
    payinAmount: 500,
    payoutAmount: 2000,
    frequency: "Monthly",
    description: "Tired of working"
  }
}
let group11 = {
  //this is the response you would get from the body
  body: {
    groupName: "Get Out of Debt",
    totalMembers: 5,
    creator: 10,
    payinAmount: 300,
    payoutAmount: 1200,
    frequency: "Monthly",
    description: "Student loans? What part of the game is this?"
  }
}
let group12 = {
  //this is the response you would get from the body

  body: {
    groupName: "Car Stash",
    totalMembers: 9,
    creator: 1,
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
queries.createUser({
  body: {
    firstName: 'user6',
    lastName: 'last6',
    username: 'user6',
    email: 'mflor54+user5@gmail.com',
    password: 'password'
  }
}, resMock);
queries.createUser({
  body: {
    firstName: 'user7',
    lastName: 'last7',
    username: 'user7',
    email: 'mflor54+user5@gmail.com',
    password: 'password'
  }
}, resMock);
queries.createUser({
  body: {
    firstName: 'user8',
    lastName: 'last8',
    username: 'user8',
    email: 'mflor54+user5@gmail.com',
    password: 'password'
  }
}, resMock);
queries.createUser({
  body: {
    firstName: 'user9',
    lastName: 'last9',
    username: 'user9',
    email: 'mflor54+user5@gmail.com',
    password: 'password'
  }
}, resMock);queries.createUser({
  body: {
    firstName: 'user10',
    lastName: 'last10',
    username: 'user10',
    email: 'mflor54+user5@gmail.com',
    password: 'password'
  }
}, resMock);queries.createUser({
  body: {
    firstName: 'user11',
    lastName: 'last11',
    username: 'user11',
    email: 'mflor54+user5@gmail.com',
    password: 'password'
  }
}, resMock);
queries.createUser({
  body: {
    firstName: 'Jason',
    lastName: 'Doe',
    username: 'JaySavesDoe',
    email: 'mflor54+user5@gmail.com',
    password: '000000'
  }
}, resMock);
//pass all 3 into the query

queries.createGroup(group1, resMock, next);
queries.createGroup(group2, resMock, next);
queries.createGroup(group3, resMock, next);
queries.createGroup(group4, resMock, next);
queries.createGroup(group5, resMock, next);
queries.createGroup(group6, resMock, next);
queries.createGroup(group7, resMock, next);
queries.createGroup(group8, resMock, next);
queries.createGroup(group9, resMock, next);
queries.createGroup(group10, resMock, next);
queries.createGroup(group11, resMock, next);
queries.createGroup(group12, resMock, next);

//run the file in with node in the terminal. Test by reading the errors and correcting the queries.
//Check the database --> did the data save correctly?

let join1 = {
  body: {
    groupID: 3,
    userID: 2
  }
}

// queries.userJoinGroup(join1, resMock, next);
