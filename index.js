const http = require("http");
const { Collection } = require("mongodb");
const mongodb = require("mongodb").MongoClient;

const server = http.createServer((request,response)=>{
    const url = "mongodb://127.0.0.1:27017";
     const conn = mongodb.connect(url).then((conn)=>{
     const db = conn.db("just");
     db.collection("products")
     .find()
     .toArray()
     .then((dataRes)=>{
        console.log(dataRes.length);
        response.end();
     }).catch((error)=>{
        throw error;
     })

     }).catch((error)=>{
        throw error;
     })
});

server.listen(1000);





/* 

const mongodb = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const server = http.createServer((request,response)=>{
  mongodb.connect(url).then((conn)=>{

    const query = {
        
            $and : [
                { id : 6},
                { title : "dolorem eum magni eos aperiam quia"    }
                  ]
                 }
            

    const projection = {
        id :0,
        title : 0,
        _id : 0
    }
    const db = conn.db("just");
    db.collection("posts")
    .find(query)
    .toArray()
    .then((dataRes)=>{
        console.log(dataRes);
        response.end();
    }).catch((error)=>{
        throw error;
    });
  }).catch((error)=>{
    throw error;
  })
});
server.listen(1000);
 */



























/* 

const http = require("http");
const mongodb = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const server = http.createServer((request,response)=>{
   mongodb.connect(url)
   .then((conn)=>{

    const query ={
      
    }
    const db = conn.db("just");
   db.collection("users").find(query,{
    projection : {
        _id : 0,
        name : 0
    }
   }).toArray()
      .then((dataRes)=>{
        console.log(dataRes);
       }).catch((error)=>{
         console.log("Unable to find the data")
       })
   }).catch((error)=>{
    throw error;
   });
});

server.listen(1000); */

/* {
//insert many

const http = require("http");
const mongodb = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";

const data = [ 
    {
        name : "amit",
        roll_num : "123"
    },
    {
        name : "priti",
        roll_num : "12345"
    },
    {
        name : "atul",
        roll_num : "123456"
    },
    {
        name : "arvind",
        roll_num : "123457"
    }
]
const server = http.createServer((request,response)=>{
  mongodb.connect(url)
    .then((conn)=>{
        const db = conn.db("just");
        db.collection("users").insertMany(data)
           .then(()=>{

            response.writeHead(200,{
                "Content-Type" : "application/json"
            });
            const succRes = JSON.stringify({
                msg : "Data inserted, check the database to verify"
            });
            response.write(succRes);
            response.end();
               
           }).catch(()=>{

            response.writeHead(501,{
                "Content-Type" : "application/json"
            });
            const errRes = JSON.stringify({
                msg : "Data not inserted ! try again or contact the admin"
            });
            response.write(errRes);
            response.end();

           });
    }).catch((error)=>{
       throw error;
    })
});

server.listen(1000);

end insert Many
} */

/* const http = require("http");
const mongodb = require("mongodb").MongoClient;
const server = http.createServer((request,response)=>{
  const url = "mongodb://127.0.0.1:27017";
  mongodb.connect(url)
  .then((conn)=>{
      console.log("success")
    })
  })
  server.listen(1000); */


/* insert one {

    const http = require("http");
const mongodb = require("mongodb").MongoClient;
const server = http.createServer((request,response)=>{
  const url = "mongodb://127.0.0.1:27017";
  mongodb.connect(url)
  .then((conn)=>{

    const data = {
        name : "amit",
        roll_num : "12345"
    }
       const db = conn.db("just");
       db.collection("user").insertOne(data)
       .then((dataRes)=>{
          response.writeHead(200,{
              "Content-Type" : "application/json"
           });
           const errorRes = JSON.stringify({
              message : "data  inserted"
           });
           response.write(errorRes);
           response.end();
       })
       .catch((error)=>{
           response.writeHead(501,{
              "Content-Type" : "application/json"
           });
           const errorRes = JSON.stringify({
              message : "data not inserted"
           });
           response.write(errorRes);
           response.end();
       });
  }).catch((error)=>{
   throw error;
  });
});

server.listen(1000);
} */



/* const http = require("http");
const mongodb = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const server = http.createServer((request,response)=>{
    mongodb.connect(url)
    .then((conn)=>{
          const db = conn.db("just");
          const data = {
            name : "priti",
            roll_num : "1234",
            email : "priti@gmail.com"
        }
     db.collection("users").insertOne(data).then((dataRes)=>{
        response.writeHead(200,{
            "Content-Type" : "application/json"
            })
            const succRes = JSON.stringify({
                messgae : "Data Inserted"
            })
           response.write(succRes);
           response.end();

       }).catch((error)=>{
        response.writeHead(502,{
            "Content-Type" : "application/json"
            })
            const errRes = JSON.stringify({
                messgae : "Unable to insert data"
            })
           response.write(errRes);
           response.end();
       });   
    }).catch((error)=>{
    response.writeHead(401,{
    "Content-Type" : "application/json"
    })
    const errRes = JSON.stringify({
        messgae : "Not Connected with database"
    })
   response.write(errRes);
   response.end();
    });


});

server.listen(1000);
 */


/* check with Sir{
    const http = require("http");
const mongodb = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const server = http.createServer((request,response)=>{
    mongodb.connect(url).then((conn)=>{
        const db = conn.db("alok");
        db.createCollection("hello").then((coll)=>{
            response.writeHead(200,{
               "Content-Type" : "application/json"
            });
   
            const succRes = JSON.stringify({
               message : "Collection created"
            })
   
           response.write(succRes);
           response.end();
        }).catch((error)=>{
         response.writeHead(509,{
            "Content-Type" : "application/json"
         });

         const errRes = JSON.stringify({
            message : "Duplicate collection"
         })

        response.write(errRes);
        response.end();
        });
    }).catch((error)=>{
       response.write("database not connected");
       response.end();
    })
});

server.listen(1000);
}
 */


/* const { createSecretKey } = require("crypto");
const http = require("http");
const query = require("querystring");

const output = (request,response,status_code,message) =>{
    response.writeHead(status_code,{
        "Content-Type" : "application/json",
        'Access-Control-Allow-Origin' : "*"

    });

    const res = JSON.stringify({
        msg : message
    });

    response.write(res);
    response.end();

}

const server = http.createServer((request,response)=>{
   if(request.method == "GET"){
    const data = query.parse(request.url.replace("/?",""));
    let username = data.username;
    let password = data.password;

    response.write(username,password);
    
    if(username == "a@gmail.com" && password == "12345"){
        let status_code = 200;
        let message = "User Authenicated"
        output(request,response,status_code,message)
    }
    else{
        let status_code = 401;
        let message = "user not authorized";
        output(request,response,status_code,message)
    }
   }
   else if(request.method == "POST"){
      let userData = "";
      request.on("data",(chunks)=>{
           userData += chunks;
           response.write(userData);
      })

      request.on("end",()=>{
         let objectData = query.parse(userData);
         
         let username = objectData.username;
         let password = objectData.password;

         if(username == "a@gmail.com" && password == "12345"){
            let status_code = 200;
            let message = "User POST Authenicated"
            output(request,response,status_code,message)
        }
        else{
            let status_code = 401;
            let message = "user not POST authorized";
            output(request,response,status_code,message)
        }
       })

      }
});
server.listen(1000);
 */
/* const server = http.createServer((request,response)=>{
      let userData = "";
      request.on("data",(chunks)=>{
          userData += chunks;
      });

      request.on("end",()=>{
        const data = query.parse(userData);
        let name = data.name;
        let email = data.email;
        if(name == "Amit Kumar"){
            if(email == "a@gmail.com"){
             let status_code = 200;
             let message = "login Successfull"
             output(request,response,status_code,message)
            } else{
                let status_code = 401;
                let message = "Wrong Email"
                output(request,response,status_code,message)
            }
        }else{
            let status_code = 401;
            let message = "Wrong name"
            output(request,response,status_code,message)
        }
       
      })
});
server.listen(1000); */