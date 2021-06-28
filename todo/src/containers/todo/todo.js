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
        this.setState({
            lists: [...this.state.lists].concat([<List text={value} />])
        });
    }

    render () {
        return (
            <div>
                <InputText addList={this.addList} />
                {this.state.lists}
            </div>
        )
    }
}

export default Todo;