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
                // {name: 'в магазин', id: 1,},
                // {name: "в #кино",  id: 2,},
                // {name: "в кино", id: 3, },
                // {name: "в #школу", id: 4, },
                // {name: "завтра в #кино #магазин", id: 5, },
            ], 
            edit: false,
            tag: [],
        }
        this.maxId = 1 ;
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
        // console.log(`id: ${id}, tag:${tag}` )
        this.setState((state) => ({
            data: state.data.map(item => {
                if(item.id === id) {
                    return {...item, tag}
                }
                return item;
            })
        }))
    }

    filterTagShow = (tag) => {
        if (this.state.tag != '') {
            return( 
                <span>
                    <strong style = {{fontSize: '15px', textDecoration: 'underline', marginLeft: '20px'}}>{tag}</strong>
                    <span className="modal-close" onClick={() => this.onResetFilter()}>×</span>
                </span>
            )
        }
    }

    dataFilter = (data, tag) => {
        if (tag === ''){
            return data
        } else return data.filter(el => el.name.includes(tag));
        // console.log(newData)    
    }

    onUpdateFilter = (tag) => {
        // console.log('fnsjfjfnfjds')
        this.setState({tag});
    }

    onResetFilter = () => {
        this.setState({
            tag:[]
        })
    }
    
    
    render() {
    //   console.log(this.state.tag)
      const {data, tag} = this.state;
      const employees = this.state.data.length;
      const visibleData = this.dataFilter(data, this.state.tag);
    //   console.log(visibleData)
      return (
          <div className="app">
              <AppInfo countStuff={employees}/>
              <NoteAddForm data={visibleData} onAdd={this.addItem} />
              <NoteList data={visibleData}
                        tag={tag}
                        onDelete={this.deleteItem}
                        onEdit = {this.onToggleEdit}
                        onNoteEdit={this.onNoteEdit}
                        onTagUpdate={this.onTagUpdate}
                        dataFilter={this.dataFilter}
                        onUpdateFilter={this.onUpdateFilter}
                        onResetFilter={this.onResetFilter}
                        filterTagShow={this.filterTagShow}
                        />
          </div>
      )
  }
}

export default App;