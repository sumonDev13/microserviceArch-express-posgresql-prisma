const register = async (req,res,next) => {
    const payload = req.body;
    return res.json({payload})
};

export default register;