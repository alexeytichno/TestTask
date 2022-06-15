import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import NoteAddForm from '../note-add-form/note-add-form';
import NoteList from '../notes-list/note-list';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data: [
                {name: 'в магазин', id: 1, tag: []},
                {name: "в #кино",  id: 2, tag: ['кино']},
                {name: "в кино", id: 3, tag: []},
                {name: "в #школу", id: 4, tag: ['школу']},
                {name: "завтра в #кино", id: 5, tag: ['кино']},
            ], 
            edit: false,
        }
        this.maxId = 6;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, ) => {
        const newItem = {
            name,
            id: this.maxId++
        }
  
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
      }

      onToggleEdit = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, edit: !item.edit}
                } 
                return item;
            })
        }))
    }

    
    onNoteEdit = (id, name) => {
        this.setState((state) => ({
            data: state.data.map(item => {
                if(item.id === id) {
                    return {...item, name}
                }
                return item;
            })
        }))
    }

    onTagUpdate = (id, tag) => {
        console.log(`id: ${id}, tag:${tag}` )
        this.setState((state) => ({
            data: state.data.map(item => {
                if(item.id === id) {
                    return {...item, tag}
                }
                return item;
            })
        }))
    }

    // onFilter = (items) => {
    //    return items.filter(element => element.name === 'в магазин' )
    // }
    
    
    render() {
      const {data} = this.state;
      const employees = this.state.data.length;
    //   const visibleData = this.onFilter(data);
    //   console.log(visibleData);
    //   data.forEach(i => console.log(i.tag[0]));
      return (
          <div className="app">
              <AppInfo countStuff={employees}/>
              <NoteAddForm data={data} onAdd={this.addItem}/>
              <NoteList data={data}
                        onDelete={this.deleteItem}
                        onEdit = {this.onToggleEdit}
                        onNoteEdit={this.onNoteEdit}
                        onTagUpdate={this.onTagUpdate}
                        />
          </div>
      )
  }
}

export default App;