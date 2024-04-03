const multer = require('multer');



module.exports=(multer({
    storage:multer.diskStorage({
        destination:(req,res,cb)=>{
            cb(null,'./public/uploads');
        },

        filename:(req,file,cb)=>{
            const time = new Date().getTime();
            cb(null,`${time}-${file.originalname}`)
        }
    }),
    fileFilter:(req,file,cb)=>{

        const extImg=['image/png','image/jpg','image/jpeg'].find(formatoAceito=> formatoAceito == file.mimetype);

        if(extImg){
            return cb(null,true)
        }

        return cb(null,false)
    }
}))