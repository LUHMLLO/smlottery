import { setCurrencySymbol } from '@/functions/currency'

export const productSchema = (product) => {
    return {
        merchant: {
            avatar: 'https://e2a7-152-166-116-41.ngrok.io/' + product.avatar,
            name: product.merchantName || product.companyBrand,
            about: product.aboutBrand,
        },
        product: {
            thumbnail: product.imageUrl,
            name: product.productName,
            description: product.descriptionLong,
        },
        prices: {
            price: product.priceContent,
            currency: setCurrencySymbol(product.priceCurrency),
        },
        date: {
            start: product.startDate,
            end: product.endDate,
        },
        categories: product.categories,
        type: product.type,
        url: product.linkUrl,
        reference: {
            mid: product.mid,
            api: product.api,
        },
    }
}

export const dealSchema = (product) => {
    return {
        merchant: {
            avatar: 'https://e2a7-152-166-116-41.ngrok.io/' + product.avatar,
            name: product.companyBrand,
        },
        product: {
            thumbnail: 'https://e2a7-152-166-116-41.ngrok.io/' + product.imageUrl,
            description: product.description,
        },
        date: {
            start: product.startDate,
            end: product.endDate,
        },
        categories: product.categories,
        type: product.type,
        url: product.referralLink,
        reference: {
            mid: product.mid,
            api: product.api,
        },
    }
}

export const couponSchema = (product) => {
    return {
        merchant: {
            avatar: 'https://e2a7-152-166-116-41.ngrok.io/' + product.avatar,
            name: product.companyBrand,
        },
        product: {
            thumbnail: 'https://e2a7-152-166-116-41.ngrok.io/' + product.imageUrl,
            description: product.description,
            code: product.couponCode,
        },
        date: {
            start: product.startDate,
            end: product.endDate,
        },
        categories: product.categories,
        type: product.type,
        url: product.referralLink,
        reference: {
            mid: product.mid,
            api: product.api,
        },
    }
}

export const responseSchema = (response) => {
    return response.data.data
}
