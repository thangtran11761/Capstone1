
import './App.css';

import SidebarUser from './pages/SidebarUser'
import RouterUser from './pages/RouterUser';

function App() {

  return (
      <div className='app'>
        <SidebarUser/>
        <div className='content'>  
            <RouterUser/> 
        </div>

      </div>
  )
}

export default App;
