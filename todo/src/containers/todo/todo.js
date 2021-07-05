import React from 'react';
import InputText from '../../components/inputText/inputText';
import List from '../../components/list/list';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists : []
        }
    }

    addList = (value) => {
        console.log(value);
        this.setState({
            lists: [...this.state.lists].concat([<List text={value} removeList={this.removeList} />])
        });
    }

    removeList = (e) => {
        this.setState({
            lists: this.state.lists.filter((data) => {
                return JSON.stringify(data) !== JSON.stringify(<List text={e.target.innerText} removeList={this.removeList} />);
            })
        })
    }

    render () {
        return (
            <div>
                <InputText addList={this.addList} />
                {this.state.lists}
            </div>
        );
    }
}

export default Todo;