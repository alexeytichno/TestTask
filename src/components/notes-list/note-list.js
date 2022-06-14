import NoteListItem from '../note-list-item/note-list-item';
import './note-list.css';

const NoteList = ({data, onDelete, onEdit, onNoteEdit,  onTagUpdate}) => {
    const element = data.map(item => {
        const {id, ...itemProps} = item;
        
        return (
            <NoteListItem 
                key = {id} 
                id={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onEdit={() => onEdit(id)}
                onNoteEdit={onNoteEdit}
                onTagUpdate = {onTagUpdate}
                />
        )
    })


    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default NoteList;