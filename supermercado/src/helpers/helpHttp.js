//no es un Hook, ya que los para ser un Hook personalizado
//necesita mas alla de iniciar con use, debe usar algun otro hook de React, como useState, useContext,useEffect o algo asi
export const helpHttp= ()=>{
    const customFetch =(endPoint,options)=>{
        const defaultHeaders ={
            accept:"application/json"
        };
        const controller = new AbortController();
        options.signal = controller.signal;//Manejar si el servidor por algun motivo esta caido
        options.method = options.method || 'GET';
        options.headers = options.headers? {...defaultHeaders,...options.headers}: defaultHeaders;
        options.body = JSON.stringify(options.body) || false;
        
        if(!options.body) delete options.body;
        console.log(options);
        setTimeout(()=>controller.abort(),3000);//Si luego de 3 segundos no responde que la cancele
        return fetch(endPoint,options).then(
            data=>(data.ok?data.json():Promise.reject({
                err:true,
                status:data.status || "00",
                statusText:data.statusText || "Ocurrio Un error"    
            }))
        ).catch(error=>error);
    }
    const get= (url,options= {})=>{
        return customFetch(url,options);
    }
    const post = (url,options = {})=>{
        options.method = 'POST';
        return customFetch(url,options);
    }
    const put = (url,options={})=>{
        options.method = 'PUT';
        return customFetch(url,options);
    }
    const del =(url,options = {})=>{
        options.method = 'DELETE';
        return customFetch(url,options);
    }
    return {
        get,post,put,del
    }
}