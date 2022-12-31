// depicting the use of async and await

const photos=[]

async function photoUpload(){
    let uploadStatus=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            photos.push("Aaron.jpg")
            resolve("Photo Uploaded!")
        },3000)
    })

    let result=await uploadStatus;
    console.log(result)
    console.log(photos.length)
    console.log(photos)
}

photoUpload()