import './note-list-item.scss';
import {Component} from "react";


class NoteListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        }
    }

    onVlaueChange = (e) => {
        const changedNote = e.target.value ;
        this.setState({
            name: changedNote
        });
        // console.log(this.props.id)
    }
    
    onNoteChange = () => {
        this.props.onNoteEdit(this.props.id, this.state.name);
        this.props.onEdit();
        // console.log(this.props.id)
    }

    // onTagPush = (name) => {
    //         const tag = name.split` `.map(e => e.match(/#/) ? e.replace(/#/g,``) : ``).filter(e => e);
    //         this.setState ({
    //             tag: tag
    //         })
    //         this.props.onTagUpdate(this.props.id, tag);
    // }
    
    // // 

    renderTags = (name) => {   
        const tag = name.split` `.map(e => e.match(/#/) ? e : ``).filter(e => e);
        // this.props.onTagUpdate(this.props.id, tag)
        return tag.map(el => {
            return (
                <span key ={el}>
                        <strong onClick={() => this.props.onUpdateFilter(el)}
                                style = {{fontSize: '15px', textDecoration: 'underline', marginLeft: '20px'}}
                                >{el}</strong>
                        <span className="modalclose" onClick = {() => this.props.onResetFilter()}>×</span>
                </span>
                
            )
        })
    }

    // parseTags(text) {
    //     return text.split` `.map(e => e.match(/#/) ? e.replace(/#/g,``) : ``).filter(e => e);
    // }

    // renderTags(text) {
    //     // this.parseTags(text).map(tag => (
    //     //     this.props.onTagUpdate(this.props.id, tag)        
    //     // ))
    //     return this.parseTags(text).map(tag => (
    //         <span
    //             style = {{fontSize: '15px', textDecoration: 'underline', marginLeft: '20px'}}
    //             key={tag}>
    //             <strong onClick={() => console.log(tag)}>{`#${tag}`}</strong>
    //         </span>
    //     ));
    // }

    render() { 
        // this.onTagPush(this.props.name)
        return (
            <li className='list-group-item d-flex justify-content-between' >
                <span className='list-group-item-label'  data-toggle="rise">{
                    this.props.edit ? <div> 
                                <input onChange={this.onVlaueChange} value={this.state.name} />
                                <button onClick={this.onNoteChange} style={{width: '100px', boxShadow: '10px 10px 20px rgba(0,0,0, .15)'}}>Сохранить</button>
                            </div>
                            : `${this.props.id}. ${this.state.name}`}
                {this.renderTags(this.props.name)}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-edit btn-sm"
                        data-toggle="increase"
                        onClick={this.props.onEdit}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={this.props.onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </li>
        )
    }             
}

export default NoteListItem;