import styled from 'styled-components'

const Wrapper = styled.section`
.content {
  border-radius: 20px;
  border: 5px solid #191970;
  width: 90%;
  height: 50%;
  margin-bottom: 50px;
}

.lower {
  background: #BFD7ED;
  margin  : 10px;
}
.team-members-item {
  margin: 10px;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  //box-shadow: 15px 9px 9px -2px rgba(230, 224, 224, 0.86);
  //-webkit-box-shadow: 15px 9px 9px -2px rgba(230, 224, 224, 0.86);
  //-moz-box-shadow: 15px 9px 9px -2px rgba(230, 224, 224, 0.86);
}

.team-info {
  padding: 10px;
}

.username{
  text-align: center;
  color: #191970;
  font-weight: bold;
  margin-bottom: 10px;
}

.remain{
  //background-color: #87CEEB;
}


.team-members-item img {
  //width: 80%;
  //height: 400px;
  //display: block;
  //margin-left: auto;
  //margin-right: auto;
  width: 100%;
  //border-radius: 25px;
  //width: 100%;
  //height: auto;
  object-fit: contain;
  cursor: pointer;
  transition: transform 2s, filter 1.5s ease-in-out;
  transform-origin: center center;
  filter: brightness(70%);
}

.team-members-item:hover img {
  filter: brightness(100%);
  transform: scale(1.05);
}

.username:hover {
  filter: brightness(100%);
  transform: scale(1.3);
  transition: transform 2s, filter 1.5s ease-in-out;
  color: #4B088A;
}

.lower:hover {
  background: #CBC3E3;
}
.text{
  margin: 5px;
  color: black;
}

.text:hover {color:brown}

.details{margin:'10px'}

@media (min-width: 992px) {
    .details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-left: 40px;
    }
    .team-members-item {
    max-width: 60%;
    max-height: 50%;
    }
    .image-container{
      display: block;
    margin-left: auto;
    margin-right: auto;
    }
    .content{
     width: 70%;
     height: 50%;
     margin-left: 50px;
    }
  }

`
export default Wrapper