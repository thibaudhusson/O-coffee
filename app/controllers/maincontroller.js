import { dataMapper } from "../dataMapper.js"

export const mainController = {
    homePage: async (req,res) => {
       try {
            const coffees = await dataMapper.coffeeFind3ByRandom();
            res.render('acceuil',{coffees});
        } catch (error) {
            console.log("Erreur serveur", error);
            res.status(500).send('Erreur serveur...');
        }
        
    },
    booksPage: async (req,res) =>{
        try{
            const coffees1 = await dataMapper.coffeeFind3F();
            const coffees2 = await dataMapper.coffeeFindOffset3()
            res.render('catalogue',{coffees1,coffees2})

        } catch (error){
            console.log("Erreur serveur", error);
            res.status(500).send('Erreur serveur...');
        }
    },

    detailPage :async (req,res) =>{
        const requested = Number(req.params.id);
        try{
            const coffee = await dataMapper.coffeeFindById(requested)
            if(!coffee){
                res.status(404).render('error')
                return;
            }
            res.render('detail',{coffee})
        }
        catch(error){
            console.log("Erreur serveur", error);
            res.status(500).send('Erreur serveur...');
        }
    },

    boutiquePage: (req,res) =>{
        res.render('boutique')
    },

    errorPage: (req,res) =>{
        res.render('error')
    },


}