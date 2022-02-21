import {useState, useEffect} from 'react'
import './App.css';
import {db} from './firebase-config' 
import {collection, getDocs, addDoc, updateDoc,deleteDoc, doc} from 'firebase/firestore'

function App() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersRef = collection(db, "users");

  const newUser = async () =>{
    console.log("new user")
    await addDoc(usersRef, {name: newName, age: Number(newAge)})
    setNewName("")
    setNewAge("")
  }
  const updateAge = async (id,age) =>{
    const userDoc = doc(db, "users", id)
    const newField = {age: age + 1}
    await updateDoc(userDoc,newField)
  }
  const deleteUser = async (id) =>{
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }
  useEffect(() => {
    const getUsers = async () =>{
      const data = await getDocs(usersRef)
      console.log(data)
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }
    getUsers()
  }, [])
  return (
    <div className="App">
      <h1>REFRESH TO UPDATE</h1>
      <input placeholder="name" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
      <input placeholder="age" type="number" value={newAge} onChange={(e)=>setNewAge(e.target.value)}/>
      <button onClick={newUser}>create user</button>
      {users.map((user)=>{
        return(
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>age: {user.age}</h1>
            <button onClick={()=>{updateAge(user.id,user.age)}}>update age</button>
            <button onClick={()=>{deleteUser(user.id)}}>Delete user</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
