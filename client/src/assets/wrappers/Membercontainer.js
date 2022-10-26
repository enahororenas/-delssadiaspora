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
}

.remain{
  //background-color: #87CEEB;
}

/*
.team-members-item:hover {
  box-shadow: -6px 11px 5px -4px rgba(0, 0, 0, 0.42);
  -webkit-box-shadow: -6px 11px 5px -4px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: -6px 11px 5px -4px rgba(0, 0, 0, 0.42);
  cursor: pointer;
  transition-duration: 2s;
}
*/

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
  transform: scale(1.5);
  transition: transform 2s, filter 1.5s ease-in-out;
}

.card1 {
    padding: 15px;
    width: 60%;
    //background: #7ce3ff;
    border-radius: 5px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
}

`
export default Wrapper