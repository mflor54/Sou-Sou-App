import axios from 'axios';
const PA = {};

PA.update = (data, success, error) => {
    axios.patch("/users/profile", {
        ...data
    })
    .then(res => {
        success(res);
    })
    .catch(err => {
        error(err);
    });
}

PA.uploadProfilePic = (data, success, error) => {
    axios.post("/users/profile/picture/", {
        ...data
    }, {
        withCredentials:true
    })
    .then(res => {
        success(res);
    })
    .catch(err => {
        error(err);
    });
}

PA.get = (success, error) => {
    axios.get("/users/profile",{withCredentials: true})
        .then(res => {
            success(res)
        })
        .catch(err => {
            error()
        });
}

export default PA;