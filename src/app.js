class IndescisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three'],
        }
    }
    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomNumber]
        alert(randomOption)
    }

    handleDeleteOption() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handleAddOption(option) {
        this.setState( prevState => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hand of computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                handlePick={this.handlePick}
                hasOption={this.state.options.length > 0}
                 />
                <Options
                handleDeleteOption={this.handleDeleteOption}
                options={this.state.options}/>
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                disabled={!this.props.hasOption}
                onClick={this.props.handlePick}>
                What should i do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOption}>Remove all</button>
                {
                    this.props.options.map(option => <Option key={option} optionText={option}/>)
                }
                
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
               {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option)
        this.props.handleAddOption(option);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}


const appRoot = document.getElementById('app');

ReactDOM.render(<IndescisionApp />, appRoot)