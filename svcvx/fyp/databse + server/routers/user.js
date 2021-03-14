const express = require('express');
// const Inven = require('../models/inventory');
// const Product = require('../models/Product');
const multer = require('multer')
// const mongoose = require('mongoose')
var randomstring = require("randomstring");
// const { Timestamp } = require('mongodb');
const { response } = require('express');
// const store = require('../models/store');
// const { Store } = require('express-session');
const router = new express.Router()


const Storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './images')
    },
    filename(req, file, callback) {
        callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
    },
})

router.get('/', async (req, res) => {
    res.send('sdsdsdsdds')

})






const upload = multer({ storage: Storage })
//   console.log(upload)
// router.use(
//     session(
//         {
//         secret: "its a secret!",
//         resave:false,
//         saveUninitialized:false,
//         store:new MongoStore({mongooseConnection:mongoose.connection}),
//         cookie: { maxAge: 180*60*1000 }}));


// router.use(function(req,res,next) {
//     res.locals.session=req.session;
//     next();

// })


// Sending a msg and saving it to the mongo

// router.post('/sendmsg', async (req, res) => {
//     // console.log(req.body)
//     const time=+ new Date()
//     console.log(req.body["message"]["Type"]["Text"])
//     const msgid = randomstring.generate({
//         length: 5,
//         charset: 'alphanumeric'
//     });
//     req.body["message"]["Messageid"]=msgid
//     const sendmsg={ message:{
//         Type: {
//             Text:req.body["message"]["Type"]["Text"],
//             Photo:req.body["message"]["Type"]["Photo"],
//             Audio:req.body["message"]["Type"]["Audio"],
//         },
//         Timestamp:time,
//         Userid:["message"]["Userid"],
//         Messageid:msgid,
        
//     }}

//     // console.log(req.body)
//     var array=[]
//     var users=[]
//     try {
//         await Product.find({ConvoID:req.body["message"]["ConvoID"]}).then((value) => {

//             // console.log()
//             array=value[0]["info"]["Messages"]
//             users=value[0]["info"]["Users"]
//             array.push(sendmsg)

//             console.log(array)
        

//         }).catch((e) => {
//             console.log(e)

//         })
//     } catch (e) {
//         res.status(400).send(e)
//     }
//     // var obj_convo=
//     //     {
//     //         ConvoID:req.body["message"]["ConvoID"], 
//     //         info:{
//     //             Users: users,
//     //             Messages:array,
//     //             Timestamp:+ new Date() 
//     //         }
        
//     //     }


    

//     try {
//         await Product.updateOne({ConvoID:req.body["message"]["ConvoID"]},
//         {$set:{ ConvoID:req.body["message"]["ConvoID"],info:{Users: users,Messages:array,Timestamp:+ new Date()}}}).then((value) => {
//             console.log(value)
//             res.send()

//         }).catch((e) => {
//             console.log(e)

//         })
//     } catch (e) {
//         res.status(400).send(e)
//     }



//     // Tr




//     // const msg = new Product(req.body)
//     // try {
//     //     await msg.save().then(() => {
//     //         console.log('work')
//     //         res.send('sent')
//     //     }).catch((e) => {
//     //         console.log(e)
//     //     })
//     // } catch (e) {
//     //     res.status(400).send(e)
//     // }



// })


// router.get('/', async (req, res) => {
//     // console.log(req.body)
//     // const msg=new Product(req.body)
//     // try {
//     //     await msg.save().then(() => {
//     //         console.log('work')
//     //         res.send('sent')
//     //     }).catch((e) => {
//     //         console.log(e)
//     //     })
//     // } catch (e) {
//     //     res.status(400).send(e)
//     // }
//     res.send("/HOME")


// })



// router.post('/conversation', async (req, res) => {
//     console.log('hncnfngfngfdgfdhgfdgfdgfdgdf')
//     console.log(req.body)
//     var all_convo=[]
//     try {
//         await store.findOne({Userid:req.body.Login}).then((value) => {
//             console.log('found the user conversations in store ')
//             all_convo=value["ConvoID"]
//             // send_store.ConvoID.push(ConvoID)
//         }).catch((e) => {
//            console.log('not found')
//         })
//     } catch (e) {
//         res.status(400).send(e)
//     }
//     // console.log(all_convo)
//     var usernames=[]
//     if(all_convo.length!=0){
//         for(var i=0;i<all_convo.length;i++)
//         {
//             try {
//                 await Product.find({ConvoID:all_convo[i]}).then((value) => {
        
//                     // console.log()
//                     // array=value[0]["info"]["Messages"]
//                    var one=value[0]["info"]["Users"][0]["id1"]
//                    var two=value[0]["info"]["Users"][0]["id2"]
//                    console.log(one+'ye one ha ')
//                    if(one==req.body.Login)
//                    {
//                        usernames.push(two)
//                    }
//                    else{
//                     usernames.push(one)
//                    }
//                     // console.log(array)
//                 }).catch((e) => {
//                     console.log(e)
//                 })
//             } catch (e) {
//                 res.status(400).send(e)
//             }
//         }
//     }
//     // console.log(usernames)
//     var last_list=[]
//     if(usernames.length!=0){
//         for(var i=0;i<usernames.length;i++){

//             try {
//                 await Inven.find({userid:usernames[i]}).then((value) => {
        
//                     console.log(value[0]["Name"])
//                 //     // array=value[0]["info"]["Messages"]
//                 //    var one=value[0]["info"]["Users"][0]["id1"]
//                 //    var two=value[0]["info"]["Users"][0]["id2"]
//                 //    console.log(one+'ye one ha ')
//                 //    if(one==req.body.Login)
//                 //    {
//                 //        usernames.push(two)
//                 //    }
//                 //    else{
//                 //     usernames.push(one)
//                 //    }
//                     // console.log(array)
//                 }).catch((e) => {
//                     console.log(e)
//                 })
//             } catch (e) {
//                 res.status(400).send(e)
//             }

            
//         }
//     }




// })


// router.post('/createaccount', async (req, res) => {

//     console.log('here')
//     console.log(req.body)
//     const userid = randomstring.generate({
//         length: 5,
//         charset: 'alphanumeric'
//     });
//     const arr = {
//         Name: req.body.Name,
//         Username: req.body.Username,
//         password: req.body.password,
//         Number: req.body.Number,
//         userid: userid
//     }
//     console.log(arr)
//     const msg1 = 'user created'
//     const user = new Inven(arr)
//     try {
//         await user.save().then(() => {
//             console.log('work')
//             res.send(msg1)
//         }).catch((e) => {
//             console.log(e)
//         })
//     } catch (e) {
//         res.status(400).send(e)
//     }



// })

// router.post('/api/upload', upload.array('photo', 3), (req, res) => {
//     console.log('here')
//     console.log('file', req.files)
//     console.log('body', req.body)
//     res.status(200).json({
//         message: 'success!',
//     })
// })

// router.post('/makeconversation', async (req, res) => {
//     console.log(req.body)
//     var array = []
//     array = req.body
//     console.log(array)
//     const time=+ new Date()
//     const ConvoID=randomstring.generate({
//         length: 6,
//         charset: 'alphanumeric'
//       });

      
//       var create_Convo={
//         ConvoID:ConvoID,
//         info:{
//             Users:array,
//             Messages:[{
//                 message: {
//                     Userid: 'null',
//                     Messageid: 'null',
//                     Type:{
//                             Text: 'null',
//                             Photo: 'null',
//                             Audio: 'null'
//                         },
//                     Timestamp:time
//                 }
//             }],
            


//         }
//       }
//       const user = new Product(create_Convo)
//       try {
//         await user.save().then((value) => {
//             console.log(value.ConvoID)
//             res.send(value)
//         }).catch((e) => {
//             console.log(e)
//         })
//     } catch (e) {
//         res.status(400).send(e)
//     }

//     var send_store={
//         Userid:array.id2,
//         ConvoID:[]  
//       }
//     // const userval = new store(create_Convo)
//     try {
//       await store.findOne({Userid:array.id2}).then((value) => {
//           console.log('found the user in store ')
//           send_store.ConvoID=value["ConvoID"]
//           send_store.ConvoID.push(ConvoID)
//       }).catch((e) => {
//          console.log('not found')
//       })
//   } catch (e) {
//       res.status(400).send(e)
//   }

// //   console.log('lengh is '+send_store.ConvoID.length)
//   if(send_store.ConvoID.length!=0)
//   {
//     try {
//         await store.updateOne({Userid:array.id2},{$set:{ConvoID:send_store.ConvoID}}).then((value) => {
//             console.log('store updated')
//         }).catch((e) => {
//            console.log('not found')
//         })
//     } catch (e) {
//         res.status(400).send(e)
//     }

//   }else{
//     send_store.ConvoID.push(ConvoID)
//     const userval = new store(send_store)
//     try {
//         await userval.save().then((value) => {
//             console.log('store new entry')
//         }).catch((e) => {
//            console.log('not found')
//         })
//     } catch (e) {
//         res.status(400).send(e)
//     } 
//   }



// })


// router.post('/signin', async (req, res) => {
//     console.log(req.body)
//     // const msg1='user created'
//     const user = req.body.Username
//     try {
//         await Inven.find({ Username: req.body.Username }).then((value) => {
//             console.log('found')
//             console.log(value)

//             res.send(value)
//         }).catch((e) => {
//             console.log(e)
//             res.send(0)
//         })
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })
// router.get('/contacts', async (req, res) => {

//     console.log('sadasdadasdasdasdasdasdasdasd')
//     try {
//         await Inven.find().then((value) => {
//             console.log(value[0])
//             res.send(value)
//         }).catch((e) => {
//             console.log(e)

//         })
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })




module.exports = router