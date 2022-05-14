/*
    CONTEXT: The use of Context within React allows us to pass data through
    the component tree without manually having to pass this data using props
    at each level.
*/
const ThemeContext = React.createContext('light');

class ThemedBorderBackground extends React.Component {
    render() {
        return (
            <div className = {'bt bt-' + this.context + ' bg-' + this.context}>
                {this.props.children}
            </div>
        );
    }
}

ThemedBorderBackground.contextType = ThemeContext;

class ThemedButton extends React.Component {
    render() {
        return (
            <div>
            <button  className = {'button button-' + this.context}>
                {this.props.label}
            </button>
            </div>
        );
    }
}

ThemedButton.contextType = ThemeContext;

class ThemedDialog extends React.Component {
    render() {
        return (
            <div className = {'dialog dialog-' + theme.context}>
                <h3 className = "dialog-title">
                    {this.props.title}
                </h3>
                <div className = "dialog-message">
                    {this.props.message}
                </div>
                <ThemedButton label = 'OK'>

                </ThemedButton>
            </div>
        );
    }
}

ThemedDialog.contextType = ThemeContext;

ReactDOM.render(
    <div>
        <ThemeContext.Provider value = "dark">
            <ThemedBorderBackground>
                Hello!
            </ThemedBorderBackground>
            <ThemedButton label = 'Click me!'>

            </ThemedButton>
            <ThemedDialog title = 'Dialog title here' message = 'Dialog message here'>

            </ThemedDialog>
        </ThemeContext.Provider>
    </div>,
    document.getElementById('react-context')
);