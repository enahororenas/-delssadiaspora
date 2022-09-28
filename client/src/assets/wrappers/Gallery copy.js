import styled from 'styled-components'

const Wrapper = styled.section`
  
  
  .card {
	color:#fff;
    width: 300px;
    height: 300px;
    border-radius: 50px;
    background: linear-gradient(145deg, #9a40a9, #b74cc9);
    box-shadow:  20px 20px 60px var(--primary-500),-20px -20px 60px var(--primary-500);
    border: none;
}

.dashboard {
    display: grid;
    background-color: red;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: auto 1fr;    
  }

  .columna{
    width:0;
  }

  .subgrid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    //display: flex;
    //align-items: stretch;
    background-color: blue;
}

.subgrid2 {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    //display: flex;
    //align-items: stretch;
    background-color: green;
}

.grid-item {
  max-width:500px;
    max-height:500px;
  font-size: 25px;
  //padding: 20px;
  //margin-top: 20px;
  //background-color: #379AD6;
  //color: #222;
  border: 1px solid white;
  //justify-self: center;
}

.grid-item-1 {
  //align-self: start;
  //justify-self: center;
}

.galleryimg {
    max-width:100%;
    max-height:100%;
    border: 10px solid var(--primary-300);
  }


  .dashboard-page {
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }


.db1 {
      display: grid;
      place-items: center;
      //background-color: #2196F3;
      margin-bottom: 50px;
    }

   .db2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #2196F3;
  }

  .db3{
    margin-left: 20px;
  }

  
  .gallerydiv{
    display: grid;
    //place-items: center;
    grid-template-columns: 100px 100px;
  grid-gap: 10px;
  } 

`
export default Wrapper
