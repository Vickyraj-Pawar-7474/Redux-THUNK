export const FETCH_DATA="FETCH_DATA";
export const FETCH_DATA_SUCCESS="FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE="FETCH_DATA_FAILURE";

export const fetchData=()=>{
    return{
        type:FETCH_DATA
    }
}

export const fetchDataSuccess=(news)=>{
    return{
        type:FETCH_DATA_SUCCESS,
        payload:news
    }
}

export const fetchDataFailure=(error)=>{
    return{
        type:FETCH_DATA_FAILURE,
        payload:error
    }
}

const fetchNews=()=>{
    return (dispatch)=>{
        dispatch(fetchData())
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=978bf0cc51cf40a492f2f600a0027cbd")
        .then((res)=>res.json())
        .then((data)=>{
            const news=data.articles.map(article=>{
                return{
                    title:article.title,
                    url:article.url

                }
                

            })
            console.log('news',news);
            dispatch(fetchDataSuccess(news))
            
        })
        .catch((error)=>{
             dispatch(fetchDataFailure(error))
 
        })
    }
}
export default fetchNews;