
var isLocal = true;

module.exports = {
    mongoDBURL :function() {
        if (this.isLocal === true) {
            return "mongodb://localhost:27017/";
        }
        //Change bellow to point to live DB
        return "mongodb://localhost:27017/";
    },
};
    