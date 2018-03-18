const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

// Query to get all groups for public groups page, map in the front-end
getAllGroups = (req, res, next) => {
    db.any('select group_name, payout, total_members from groups')
    .then((data) => {
        res.status(200).json({
            status: success,
            data: data,
            message: 'Retrieved all groups'
        });
    })
    .catch((err) => {
        return next(err);
    })
}
// get user info for their profile page when they log in or during session
getUserInfo = (req, res, next) => {
    db.any('select first_name, last_name, amount, rating from users')
    .then((data) => {
        res.status(200).json({
            status: success,
            data: data,
            message: 'Retrived User info'
        });
    })
    .catch((err) => {
        return next(err);
    });
}
// selected from groups list page from front-end
getSingleGroup = (req, res, next) => {
    db.none('select group_name, rating, payout, frequency from groups where group_name=${group_name}',
        {
            group_name: req.body.group_name
        }
    )
    .then((data) => {
        res.status(200).json({
            status: success,
            data: data,
            message: 'Retrieved group info'
        })
    })
}


module.exports = {
    getAllGroups: getAllGroups,
    getUserInfo: getUserInfo,
    getSingleGroup: getSingleGroup
  
};