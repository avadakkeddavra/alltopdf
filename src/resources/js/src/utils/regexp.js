export const EMAIL_REGEXP = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim
export const FACEBOOK_REGEXP = /^(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w]*\/)?(?:profile.php\?id=(?=\d.*))?([\w]*)?$/gim
export const URL_REGEXP = /^(?:http(s)?:\/\/)?[\w.-]+(?:[\w-]+)+[\w\-_~:/?#[\]@!&',;=.]+$/gim;
export const STR_NUMBER = /^[а-яА-Я0-9іІєЄABEIKMHOPCTXabceikmhoptx]*$/gm;
export const NAME_REGEXP = /^[а-яА-Я.'\s-іІєЄ]*$/gm;
export const NUMBERS_ONLY = /^[0-9]*$/gm