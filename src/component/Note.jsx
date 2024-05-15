function Note({id,text,edithandler,deleteHandler})
{
    return(
        <>
        <div className="note">
            <textarea readOnly 
            cols={10}
             className="text-justify p-3 text-white bg-transparent outline-none resize-none"
            >{text}</textarea>
            <div className="noteFooter" style={{justifyContent:"flex-end"}}>
                <button className="note_save" onClick={()=>deleteHandler(id)}>Delete</button>
                <button className="note_save" onClick={()=>edithandler(id,text)}>Edit</button>
            </div>
        </div>
        </>
    )
}
export default Note;