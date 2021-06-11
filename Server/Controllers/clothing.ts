import express, { Request, Response, NextFunction } from 'express';

import Clothing from "../Models/clothing";

export function DisplayClothingListPage(req: Request,res:Response,next: NextFunction):void
{
    Clothing.find(function(err,clothingCollection){
        if(err){
            return console.error(err);
        }
        
        res.render('index', {title: 'clothing list', page: 'clothing-list', clothing: clothingCollection})
    });
}