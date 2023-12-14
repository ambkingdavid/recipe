import continentModel from "../models/continent.model.js";


class ContinentController {
    static async getAllContinent(req, res) {
        const continents = continentModel.find().lean();

        res.status(200).render('continent', {
            
        })
    }
}

export default ContinentController;
