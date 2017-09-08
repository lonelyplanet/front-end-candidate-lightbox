import 'whatwg-fetch';

const get = url => (
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response;
            }

            return Promise.reject({
                message: response.statusText,
                response,
            });
        })
        .then(response => response.json())
);

const fetchImage = (url, doneCallback, failCallback) => (
    get(url)
        .then(doneCallback)
        .catch(failCallback)
);


export default fetchImage;
