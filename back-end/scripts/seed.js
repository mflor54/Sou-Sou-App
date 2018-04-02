var db = require('../db/index');
var queries = require('../db/queries');


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
    description: "description of the group because descriptions are great. They help people know what is going on and stuff!"
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
    description: "description of the group because descriptions are great. They help people know what is going on and stuff!"
  }
}
let group3 = {
  //this is the response you would get from the body
  body: {
    groupName: "Down Payment",
    totalMembers: 9,
    creator: 3,
    payinAmount: 250,
    payoutAmount: 2250,
    frequency: "Monthly",
    description: "description of the group because descriptions are great. They help people know what is going on and stuff!"
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
    description: "description of the group because descriptions are great. They help people know what is going on and stuff!"
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
    description: "description of the group because descriptions are great. They help people know what is going on and stuff!"
  }
}


//create a mock response. nothing has to go inside
let resMock = {
  //res.status in a function
  status: function() {
    //returns a json object
    return {
      json: function() {
        //this is a mock response and nothing needs to go inside.
      }
    }
  }
}

//create the mock next (in this case is our .catch)
let next = (err) => {
  console.log(err);
}

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
