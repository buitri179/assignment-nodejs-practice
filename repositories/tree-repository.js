const Tree = require('../models/tree');

exports.findAll = () => {
    return Tree.find();
}

exports.save = (insertData) => {
    const data = new Tree(insertData);
    return data.save();
};