const somethingWillHappen = () =>{
    return new Promise ((resolve, reject)=>{
        if (true){
            resolve('Todo OK')
        }else{
            reject('Neeee Nada funciona jejeje')
        }
    })
} 

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))


const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject)=>{
        if (true){
            setTimeout(()=>{
                resolve('OK OK')
            },2000)
            
        }else{
            const error = new Error('Uppss')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log(response))
    .catch(err =>{
        console.error(err)
    })