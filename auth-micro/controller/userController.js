import prisma from "../config/db.config.js";

const getUser = async(req,res,next) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
          where: {
            id: id,
          },
          select: {
            id: true,
            name: true,
            email: true,
          },
        });
        return res.json({ user: user });
    } catch (error) {
        console.log(error.message);
        res.status(error.status);
    }
};

const getUsers = async(req,res,next) => {
    try {
        const { userIds } = req.body;
    const users = await prisma.user.findMany({
      where: {
        id: {
          in: userIds,
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return res.json({ users: users });

    } catch (error) {
        console.log(error.message);
        res.status(error.status);
    }
};

export {getUser,getUsers}