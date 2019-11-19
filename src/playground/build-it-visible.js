class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    toggleVisibility() {
        this.setState(prevState => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility? 'Hide details' : 'Show details'}
                </button>
                { this.state.visibility && (
                    <div>
                        <p>Hey. Thes are some details you can now see!</p>
                    </div>
                )}
                { console.log(this.state.visibility)}
            </div>
        );
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<ToggleVisibility />, appRoot)