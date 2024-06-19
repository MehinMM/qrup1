import './style.css';
import {Home,Profile,Contact,Error} from '../Hami';
import { BrowserRouter,Routes,Route,Navigate,Outlet} from 'react-router-dom';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Outlet/>}>
        <Route index element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='nermin' element={<Profile/>}/>
        <Route path='*' element={<Navigate to='/aytac'/>}/>
      <Route path='aytac' element={<Error/>}/>
      </Route>


    </Routes>
   </BrowserRouter>
  )
}

export default App;
