import { dataMapper } from "../dataMapper.js"

export const mainController = {
    homePage: (req,res) => {
        res.render('acceuil')
    },
    booksPage: (req,res) =>{
        res.render('catalogue')
    },
    detailPage: (req,res) =>{
        res.render('detail')
    },
    boutiquePage: (req,res) =>{
        res.render('boutique')
    }

}