import { Request, Response} from 'express';
import { Pet } from '../models/Pet';
import { createMenu } from '../hellpers/pageControllerHellper';

export const search = (req: Request, res: Response) => {

    let query = req.query.q as string;
    
    if(!query){
        res.redirect('/');
        return;
    }

    let list = Pet.getByName(query);

    res.render('pages/page', {
        list,
        query,
        menu: createMenu('')
    });



}