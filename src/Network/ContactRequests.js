import API from "../axios/axios";

export function getContacts(url)
{
    return API.get(url);
}