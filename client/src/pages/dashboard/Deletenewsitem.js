import React,{useEffect,useState} from 'react'
import Wrapper from '../../assets/wrappers/Deletenews'
import {Navbar,BigSidebar,SmallSidebar,Alert} from '../../components'
import { useAppContext } from '../../context/appContext'
import Loading from '../../components/Loading'

const Deletenewsitem = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState([]);
    const [reload, setReload] = useState(false);
    const {getNews,isLoading,news,showAlert,deleteNews} = useAppContext()
    useEffect(()=>{
     getNews()
    },[reload])
    if(isLoading){return <Loading center/>}

    const handleCheckbox = (event, newsItem,i) => { //console.log('NID',i,'=',event.target.checked)
    setSelectedRows((state) => ({
        ...state, 
        [i]: event.target.checked,
      }));

    if(event.target.checked) {
        setSelectedInfo((state) => ({
            ...state,
            [newsItem.nid] : newsItem.nid
        }))
      } else { delete selectedInfo[newsItem.nid] } 
   }
    

   const handleSubmit =(e) => {
    e.preventDefault()
    deleteNews(selectedInfo)
    setReload(true)
    //console.log('reload')
    //setSelectedRows([])
    //setSelectedInfo([])
   }

   if (news.length === 0) {
    return (
      <Wrapper>
        <h2>No News Article Available...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
    <main className='dashboard'>
      <SmallSidebar/>
      <BigSidebar/>
      <div>
        <Navbar top='Delete News Article'/>
        <div className='dashboard-page'>
        </div>

        <form  onSubmit={handleSubmit}>
        <div style={{margin:'20px'}}>
        {showAlert && <Alert/>}

        {news.length !== 0 &&    news.map((newsItem, index) => {
         const lk = 'L'+index
              return  ( 
            
                <div key={lk} >
                    <label key={index}>
                        <input type="checkbox"  name='editnews' value={newsItem.newsItem}
                        checked={ selectedRows[index]  || false } 
                        onChange={(e)=>handleCheckbox(e,newsItem,index)} />
                        {newsItem.header}
                        <div>{newsItem.newsItem}</div>
                    </label>
                </div>    
                    
                )})}
        
        <button className='btn btn-block dlb' type='submit' disabled={isLoading}>
        {isLoading?'Please Wait.....':'DELETE'}
      </button>   

    </div>
    </form>

      </div>
    </main>
  </Wrapper>
  )
}

export default Deletenewsitem