import styled from 'styled-components'


const Wrapper = styled.section`
//background: #140d30;


@import url('https://fonts.googleapis.com/css?family=Montserrat');

//* {box-sizing: border-box;}

body {
  background-color: #28223F;
  font-family: Montserrat, sans-serif;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 100vh;
  margin: 0;
}

h3 {
  margin: 10px 0;
}

h6 {
  margin: 5px 0;
  text-transform: uppercase;
  font-size: medium;
}

p {
  font-size: 14px;
  line-height: 21px;
}

.disp-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-left: 20px;
    margin-top: 20px;
  }

.gridelem{
  background-color: #03BFCB;
  border: 1px solid #03BFCB;
  border-radius: 3px;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  padding: 10px 25px;
  background-color: transparent;
  color: #02899C;
  width: 220px;
}

.card-container {
  background-color: #231E39;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
  color: #B3B8CD;
  padding-top: 30px;
  position: relative;
  max-width: 100%;
  height: 100%;
  z-index: -1;
  text-align: center;
}

.card-container .round {
  border: 1px solid #03BFCB;
  border-radius: 50%;
  padding: 7px;
  width: 300px;
  height: 300px;
  border-radius: 50px;
}
.bday_parent{
  text-align: left;
  margin-left: 10px;
}
.buttons{
  text-align: left;
  margin-left: 20px;
  margin-bottom: 20px;
}

button.primary {
  background-color: #03BFCB;
  border: 1px solid #03BFCB;
  border-radius: 3px;
  color: #231E39;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  padding: 10px 25px;
}

button.primary.ghost {
  background-color: transparent;
  color: #02899C;
  width: 220px;
}

.bdaycaption{
  color:#FFDE00;
  font-weight: bold;
}


/////////////OLD DATA
.newsimg{
  height: 300px;
  width: 300px;
  float: left; 
  margin-top: 10px;
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

  .dashbirthday{
    margin-top: 20px;
    margin-left:10px;
  }

  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
  }
  .dashboard-page {
    width: 100%;
    margin: 0 auto;
    //padding: 0.5rem 0;
  }
  @media (min-width: 992px) {
    .buttons{
      display: none;
    }

    .nonelem{
      margin-left: -100px;
    }
    .nonebdy{
      justify-self: start;
    }
    .dashboard {
      grid-template-columns: auto 1fr;
    
      //position:sticky;
      //width: 100%;
    }
    .dashboard-page {
      width: 90%;
    }
    .card-container .round{
      width: 400px;
      height: 400px;
    }
    .card-container .pro {
      color: #231E39;
      background-color: #FEBB0B;
      border-radius: 3px;
      font-size: 14px;
      font-weight: bold;
      padding: 3px 7px;
      position: absolute;
      top: 30px;
      left: 30px;
    }
  }
  @media (max-width: 992px) {                  
    .card-container .pro {
      display: none;
   }
   .disp-grid {
    display: none;
    }
  button.primary.ghost {
    width: 150px;
  }
  
  
}
`
export default Wrapper
