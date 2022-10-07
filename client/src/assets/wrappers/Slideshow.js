import styled from 'styled-components'

const Wrapper = styled.section`  
.slideshow {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  width: 1000px;
  height: 800px;
}

.mainImg {
  //max-width:100%;
  //max-height:100%;
  
    width:  750px;
    height: 700px;
    object-fit:contain;
  //width: 50vw;
  //height: 65vh;
  transition: all 500ms;
}

.actions {
  position: absolute;
  top: 55%;
  width: 80%;
  display: flex;
  justify-content: space-between;
}

.actions button {
  background: #0000003d;
  border: none;
  cursor: pointer;
  padding: 10px;
  padding-top: 10px;
  margin: 5px;
  border-radius: 15px;
  padding-top: 5px;
}

.actions button:active {
  background: #000000a2;
  border: none;
  cursor: pointer;
  padding: 10px;
  padding-top: 10px;
  margin: 5px;
  border-radius: 15px;
  padding-top: 5px;
}

@media only screen and (max-width: 998px) {
  .slideshow {
  position: relative;
  max-width: 100%;
  width: 100%;
}
.lowerBody{ margin-left: 10%;}
.actions { 
  margin-left: 10%;
}
.pageControl{margin-top:10%}

.mainImg {
    width:  450px;
    height: 300px;
    object-fit:contain;
}

}
`
export default Wrapper