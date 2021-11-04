
const B2 = require('backblaze-b2');
const fs = require('fs');


const b2 = new B2({
    applicationKeyId: '00281028e2f79d60000000009',
    applicationKey: 'K002N001TS8aY+78XqQzaL4U0+FRQDA',

});


 async function uploadFile(filename,data){
    fs.readFile('./images/'+filename, async function(err, buffer){
        console.log(buffer,filename)

        await b2.uploadFile({
            uploadUrl: data.data.uploadUrl,
            uploadAuthToken: data.data.authorizationToken,
            data: buffer,
            fileName:filename
    
        }).then((response) => {console.log(response)})
    })

 }

async function GetBucket(filename) {
    try {
        await b2.authorize(); 
        b2.getUploadUrl({
            bucketId: '2881a04278fe12cf77c90d16'
        }).then((data) => {
            if(data){
                uploadFile(filename,data);
            }
        })
  
    } catch (err) {
        console.log('Error getting bucket:', err);
    }
}

module.exports = GetBucket;
