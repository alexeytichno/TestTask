import NoteListItem from '../note-list-item/note-list-item';
import './note-list.scss';

const NoteList = ({data, onDelete, onEdit, onNoteEdit,  onTagUpdate, dataFilter,onUpdateFilter, onResetFilter}) => {
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
                dataFilter={dataFilter}
                onUpdateFilter={onUpdateFilter}
                onResetFilter={onResetFilter}
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