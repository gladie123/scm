//const { response } = require('express')
const express=require('express')
const Router = express.Router()
const loginTemplateCopy =require('/..models/loginmodels.js')
router.post('/login',(request,response) =>{
    const loginUser = new loginTemplateCopy({
        name:request.body.name,
        email:request.body.email,
        subject:request.body.subject,
        details:request.body.details

        } )
    loginUser.save
    .then(data=>{
        response.json(data)
    })
    response.json(error)
})

module.exports= router;