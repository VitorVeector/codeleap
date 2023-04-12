import { NextApiRequest, NextApiResponse } from 'next';
import User from 'models/User';
import dbConnection from 'services/dbConnection';

dbConnection();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch(method){
        case "GET":
            try {
                const clients = await User.find({})
                res.status(200).json({sucess: true, data: {clients}})
            } catch (err) {
                console.log(err)
                res.status(500).json({sucess: false, err})
            }
    }
}
