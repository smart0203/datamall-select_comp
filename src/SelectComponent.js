import React from "react";
import FontAwesome from 'react-fontawesome';
class SelectComponent extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            isListOpen: false,
            headerTitle: props.title,
            list: props.list
        }
    }
    toggleList = () => {
        this.setState(prevState => ({
            isListOpen: !prevState.isListOpen
       }))
    }
    selectItem = (item) => {
        const { title, id, key } = item;
        this.setState({
            headerTitle: title,
            isListOpen: false
        });
    }
    onChange = (e) => {
        let lists = this.props.list.filter(item => {
            return item.title.indexOf(e.target.value) > -1;
        });
        this.setState({list: lists});
    }
    render() {
        const { isListOpen, headerTitle } = this.state;
        const { list } = this.state.list;
      
        return (
            <div className="dd-wrapper">
                <button
                    type="button"
                    className="dd-header"
                    onClick={this.toggleList}
                >
                <div className="dd-header-title">{headerTitle}</div>
                {isListOpen
                    ? <FontAwesome name="angle-up" size="2x" />
                    : <FontAwesome name="angle-down" size="2x" />}
                </button>
                {isListOpen && (
                <div
                    role="list"
                    className="dd-list"
                >
                    <input type="text" className="searching" onChange={this.onChange} />
                    {this.state.list.map((item) => (
                    <button
                        type="button"
                        className="dd-list-item"
                        key={item.id}
                        onClick={() => this.selectItem(item)}
                    >
                        {item.title}
                        {' '}
                        {item.selected && <FontAwesome name="check" />}
                    </button>
                    ))}
                </div>
                )}
            </div>
        )
    }
}
export default SelectComponent;