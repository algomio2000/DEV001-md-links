const {mdLinks}= require('./index');
mdLinks('/noexiste/').then(()=>{})
.catch((error)=>{
    console.log(error)
});