class NamesList extends React.Component {

    render() {
        var listItems = this.props.names.map((name, index) => <li key = {index}>
                                                            {name.toUpperCase()}
                                                        </li>
        );

        // Do not use indexes as keys

        return (
            <ul className = "names">
                {listItems}
            </ul>
        );
    }
}

const names = ['Esther', 'Lily', 'Candace', 'Candace', 'Edward', 'Sidney'];

ReactDOM.render(<NamesList names = {names} />,
    document.getElementById('react-lists'));