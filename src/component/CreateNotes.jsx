function CreateNotes({inputText,setInputText,saveHandler}){
  const char=100;
  const charLimt = char  - inputText.length;
    return(
        <>
          <div className="note">
           <textarea
           cols={10}
           rows={3}
           placeholder="type something here for note"
           value={inputText}
           className="text-justify text-white bg-transparent outline-none resize-none"
           onChange={(e)=>setInputText(e.target.value)}
           maxLength={100}> </textarea>
           <div className="noteFooter">
            <span className="label">{charLimt} left</span>
            <button className="note_save" onClick={saveHandler}>save</button>
           </div>

          </div>
        </>
    )
}
export default CreateNotes;