import NoteListItem from '../note-list-item/note-list-item';
import './note-list.scss';

const NoteList = ({data, tag, onDelete, onEdit, onNoteEdit,  onTagUpdate, dataFilter,onUpdateFilter, onResetFilter, filterTagShow}) => {
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
            filterTagShow={filterTagShow}
            />
            )
        })
        return (

            <ul className="app-list list-group">
                {filterTagShow(tag)}
                {element}
            </ul>
    )
}

export default NoteList;