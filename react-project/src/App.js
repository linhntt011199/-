import logo from './logo.svg';
import './App.css';
import UserHook from './hooks/UserHook';

function App() {
  const [user, next, back, userList] = UserHook();  
  return (    
    <div className="App">      
    <div>        
      <span>学生一覧：[{userList.map(item => item.name).join(',')}]        </span>
      <br/>        
      <span>位置：{user.id +1}        </span>
      <br/>        
      <span>名前：{user.name}        </span>
      <br/>        
      <span>          
        <button onClick={next}>次に</button>          
        <button onClick={back}>前に</button>        
      </span>
      <br/>      
    </div>   
    </div>  
    );
}

export default App;
