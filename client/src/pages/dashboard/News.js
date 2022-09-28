import React,{useEffect} from 'react'
import Wrapper from '../../assets/wrappers/SharedLayout'
import {Navbar,BigSidebar,SmallSidebar,Newsitem} from '../../components'
import { useAppContext } from '../../context/appContext'
import Loading from '../../components/Loading'


const News = () => {

  const {getNews,isLoading,news} = useAppContext()
  useEffect(()=>{
   getNews()
  },[])

//console.log('N',news)

  if(isLoading){return <Loading center/>}

  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar top='News'/>
          <div className='dashboard-page'>
          </div>

          <div>
            <ol>          
            {news.length !== 0 &&    news.map((newsItem, index) => { const lk = 'L'+index
                return  ( <li key={lk}>
                  <Newsitem key={index} 
                    header={newsItem.header}
                    img={newsItem.image}
                    article={newsItem.newsItem} 
                    />
                </li>)})}
            </ol>
          </div>

        </div>
      </main>
    </Wrapper>
  )
}

export default News