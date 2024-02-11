import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import fetchNews from './Action/Action';
import { useEffect } from 'react';


function App() {
  const dispatch=useDispatch();
  const {news,loading,error}=useSelector((state)=>state);

  useEffect(()=>{
    dispatch(fetchNews())
  },[dispatch])


  return (
    <div >
      <div className="App"> <h3><mark>Fetch NEWS_API using REDUX-THUNK</mark></h3></div>
      {loading && <p>Loading...</p>}
      {error && <p>error</p>}
      {news && (
       <ol>
         {news.map((articel,index)=>{
           return <li key={index}>
            <a href={articel.url} target='_blank'><h5>{articel.title}</h5></a>
           </li>
         }

)}
       </ol>
      )}

      
    
    </div>
  );
}

export default App;
