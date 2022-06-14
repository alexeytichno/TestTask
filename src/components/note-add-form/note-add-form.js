// import "./note-add-form.css";
import "./note-add-form.scss";


import {Component} from "react";

class NoteAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }
   
    onVlaueChange =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name !== "") {
            this.props.onAdd(this.state.name);
        } else {
            alert('enter all info');
        }

        this.setState({
            name: ''
        })
    }

    render() {
   
        const {name} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавтьте заметку</h3>
                <form onSubmit={this.onSubmit} className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder='Как его зовут'
                        name="name"
                        value={name}
                        onChange={this.onVlaueChange}/>
                    <button type='submit' className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}
export default NoteAddForm;