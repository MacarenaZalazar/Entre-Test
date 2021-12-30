import { AppCont } from './AppStyles';
import Card from './containers/Card/Card';
import RoomCard from './containers/RoomsCard/RoomCard';
import Sidebar from './containers/Sidebar/Sidebar';

function App() {
  return (
    <AppCont>
      <Card/>
      <RoomCard/>
      <Sidebar/>
    </AppCont>
  );
}

export default App;
