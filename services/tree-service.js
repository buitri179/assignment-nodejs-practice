const tree = require('../models/tree');
const treeRepository = require('../repositories/tree-repository');

exports.getAll = () => {
    return treeRepository.findAll();
};

exports.store = async (treeData) => {
    return treeRepository.save(treeData);
}