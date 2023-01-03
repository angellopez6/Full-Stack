export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json"
        };

        /*

        Hay un objeto que se llama abort controller que nos sirve
        detectar si la API está caída por alguna razón y no seguir
        renderizando un loader (como el problema que tenía la antigua
        página de unimar) que desconectaban la API y el loader seguía
        renderizandose por horas y horas...

        */

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";

        options.headers = options.headers 
        ? {...defaultHeader,...options.headers} 
        : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;
        setTimeout(() => controller.abort(), 3000);

        return fetch(endpoint, options)
        .then((res) => 
            res.ok 
            ? res.json()
            : Promise.reject({
                err:true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrió un error"
            })
        )
        .catch(err=>err);
    };

    const get = (url, options = {}) => customFetch(url,options);

    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options);
    }

    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options);
    }

    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options);
    }

    return {
        get,
        post,
        put,
        del
    };
}