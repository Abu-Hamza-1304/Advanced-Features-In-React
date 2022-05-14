class Name extends React.Component {
    render() {
        return (
            <li>
                {this.props.name.toUpperCase()}
            </li>
        );
    }
}

class NamesList extends React.Component {
    render () {
        var listItems = this.props.names.map(
            (name, index) => <Name key = {key} name = {names[key]} />
        );
        return (
            <ul className = "names">
                {listItems}
            </ul>
        );
    }
}

const names = {
    'id1': 'Esther',
    'id2': 'Lily',
    'id3': 'Candace',
    'id4': 'Edward',
    'id5': 'Sidney'
};

ReactDOM.render(<NamesList names = {names} />,
    document.getElementById('react-lists-1'));