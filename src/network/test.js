import axios from 'axios'


// export function request(config) {


//     return new Promise((resolve, reject) => {
//         const instace = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })
//         instace(config).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })

// }

export function request(config) {
    // 1
    const instance = axios.create({
            baseURL: 'http://127.0.0.1:8000',
            timeout: 5000
        })
        // http://123.207.32.32:8000'
        // http://152.136.185.210:7878/api/m5
    instance.interceptors.request.use(config => {
        console.log(config)
        return config
    }, err => {
        // console.log(err)
    })
    instance.interceptors.response.use(res => {
        // console.log(res)
        // console.log("res")
        return res.data
    }, err => {
        // console.log(err)
    })
    return instance(config)

}


request({
    url: "/ie"
}).then((res) => {
    console.log("res");
})