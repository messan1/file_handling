
const B2 = require('backblaze-b2');
const fs = require('fs');


const b2 = new B2({
    applicationKeyId: '00281028e2f79d60000000009',
    applicationKey: 'K002N001TS8aY+78XqQzaL4U0+FRQDA',

});
(async function GetBucket() {
    try {
        await b2.authorize(); 
        b2.getUploadUrl({
            bucketId: '2881a04278fe12cf77c90d16'
        }).then((data) => {
            if(data){
                uploadFile(data);
            }
        })
  
    } catch (err) {
        console.log('Error getting bucket:', err);
    }
})()


 async function uploadFile(data){
    fs.readFile("2.png", async function(err, buffer){

        await b2.uploadFile({
            uploadUrl: data.data.uploadUrl,
            uploadAuthToken: data.data.authorizationToken,
            data: buffer,
            fileName:"2.png"
    
        }).then((response) => {console.log(response)})
    })

 }