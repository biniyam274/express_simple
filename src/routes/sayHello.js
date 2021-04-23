
module.exports = async (req, res) => {
    let name = req.params.name
    res.send(`Hello ${name}`);
};
