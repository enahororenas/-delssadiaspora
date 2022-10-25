import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Register, Landing, Error,ProtectedRoute} from './pages'
import {Profile,Dash,About,Contact,News,Gallery,Addleader,Leadership,
  Addnewimage,Addnewsitem,Members,Adduser,Deletenewsitem} from './pages/dashboard'



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path='/user' element={<ProtectedRoute><Dash/></ProtectedRoute>}/>
      <Route path='/about' element={<ProtectedRoute><About/></ProtectedRoute>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
      <Route path='/news' element={<ProtectedRoute><News/></ProtectedRoute>}/>
      <Route path='/gallery' element={<ProtectedRoute><Gallery/></ProtectedRoute>}/>
      <Route path='/members' element={<ProtectedRoute><Members/></ProtectedRoute>}/>
      <Route path='/addimage' element={<ProtectedRoute><Addnewimage/></ProtectedRoute>} />
      <Route path='/addnewsitem' element={<ProtectedRoute><Addnewsitem/></ProtectedRoute>} />
      <Route path='/adduser' element={<ProtectedRoute><Adduser/></ProtectedRoute>}/>
      <Route path='/deletenews' element={<ProtectedRoute><Deletenewsitem/></ProtectedRoute>} />
      <Route path='/addexec' element={<ProtectedRoute><Addleader/></ProtectedRoute>}/>
      <Route path='/exco' element={<ProtectedRoute><Leadership/></ProtectedRoute>}/>
      <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
