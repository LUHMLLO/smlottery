import router from '@/router'

export const pushTo = (path) => {
    router.push({
        name: path,
    })
}

export const pushToParams = (path, params) => {
    router.push({
        name: path,
        params: params,
    })
}
