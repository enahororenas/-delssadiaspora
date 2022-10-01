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
  max-width:100%;
  max-height:100%;
  width: auto;
  height: auto;
  transition: all 500ms;
}

.actions {
  position: absolute;
  top: 50%;
  width: 100%;
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
  height: auto;
}


}
`
export default Wrapper