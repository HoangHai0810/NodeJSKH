import db from "../models/index";

let getHomePage = async(req, res) => {
    try{
        let data = await db.User.findAll();
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e);
    }
    
    return res.render('homepage.ejs');
}

let getInfoPage = (req, res) => {
    return res.render('infopage.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getInfoPage: getInfoPage,
}