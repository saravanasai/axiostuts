import API from "../axios/axios";

export function getContacts(url)
{
    return API.get(url);
}

export function user_Login(url,fromData)
{
    return API.post(url,fromData);
}