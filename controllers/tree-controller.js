const treeService = require('../services/tree-service');

exports.getAll = async  (req,res) => {
    try {
        const trees = await treeService.getAll();
        res.render('trees/admin', { trees })
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.createTree = async (req, res) => {  
    try {    
      res.render('trees/create');
    } catch (error) {    
      res.status(400).send(error.message);
    }
};

exports.storeTree = async (req, res) => {
    const { treename, description, image  } = req.body;
    try {    
      await treeService.store({ treename, description, image });    
      res.redirect('/trees');
    } catch (error) {    
      res.status(400).send(error.message);
    }
};