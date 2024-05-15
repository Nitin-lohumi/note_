import { useEffect, useState } from "react";
import CreateNotes from "./CreateNotes";
import Note from "./Note";
import {v4 as uuid } from 'uuid';
function Notes(){
  const [inputText,setInputText] = useState("");
  const [notes ,setnotes] = useState([]);
  const [editToggle,setEditToggle] =useState(null);
    const scroll_bar=()=>{
            notes.scrollTop=notes.scrollHeight;
    }
  const edithandler = (id,text)=>{
   setEditToggle(id);
   setInputText(text);
  }
  const deleteHandler = (id) =>{
    const newNotes = notes.filter(n=>n.id !==id);
    setnotes(newNotes);
  }
   const saveHandler = ()=>{
    if(editToggle){
      setnotes(notes.map((note)=>(
        note.id === editToggle? 
        {...note,text:inputText}
        :note
      )))
    }
    else{
      setnotes((prevNotes)=>[
       ...prevNotes, {
         id:uuid(),
         text:inputText
       }
      ])
    }
     setInputText("");
     setEditToggle(null)
     scroll_bar();
   }
   useEffect(()=>{
     const data= JSON.parse(localStorage.getItem("notes"))
     if(data){
      setnotes(data);
     }
   },[]);
   useEffect(()=>{
    window.localStorage.setItem("notes",JSON.stringify(notes));
   },[notes])
 return(
    <>
   <div className="notes">
    {
      notes.map((note)=>(
        editToggle===note.id?
        <CreateNotes 
        inputText={inputText}
        setInputText={setInputText}
        saveHandler={saveHandler}/>
      :<Note 
      key={note.id}
      id= {note.id}
      text= {note.text}
      edithandler={edithandler}
      deleteHandler ={deleteHandler}
      />
      ))
    }
    
    {
      editToggle===null?
      <CreateNotes 
      inputText={inputText}
      setInputText={setInputText}
      saveHandler={saveHandler}/>
      :<></>
    }
    </div>
    </>
)
}
export default Notes;