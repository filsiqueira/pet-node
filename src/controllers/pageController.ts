import { Request, Response } from 'express';
import { Pet } from '../models/Pet';
import { createMenu } from '../hellpers/pageControllerHellper';

export const home = (req: Request, res: Response) => {
    
    const list = Pet.getAll();

    res.render('pages/page', {
        list,
        banner:{
            title: 'Todos os animais',
            image: 'allanimals.jpg'
        },
        menu: createMenu('all')
    });
}

export const dogs = (req: Request, res: Response) => {

    const list = Pet.getByType('dog');
    
    res.render('pages/page', {
        list,
        banner:{
            title: 'Cachorros',
            image: 'banner_dog.jpg'
        },
        menu: createMenu('dog')
    });
}

export const cats = (req: Request, res: Response) => {

    let list = Pet.getByType('cat');

    res.render('pages/page', {
        list,
        banner:{
            title: 'Gatos',
            image: 'banner_cat.jpg'
        },
        menu: createMenu('cat')
    });
}

export const fishes = (req: Request, res: Response) => {
    
    let list = Pet.getByType('fish');

    res.render('pages/page', {
        list,
        banner:{
            title: 'Peixes',
            image: 'banner_fish.jpg'
        },
        menu: createMenu('fish')
    });
}