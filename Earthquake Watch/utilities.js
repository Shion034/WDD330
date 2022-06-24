export function getJSON(url) { 

function getJSON(url){
    return fetch(url)
        .then(function(response){
            return response.json();
        })
        .catch(function(error){
            console.log(error);
        });
}
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}}
export const getLocation = function (options) {  
const getLocation = function (options) {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};}

