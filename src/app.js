class IndescisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hand of computer';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
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
                <button>What should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        
        return (
            <div>
                <p>This title from Options</p>
                {
                    this.props.options.map(option => {
                        return <p key={option}>{option}</p>
                    })
                }
                
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <ol>
                <li>One</li>
                </ol>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>Add Option</button>
            </div>
        )
    }
}


const appRoot = document.getElementById('app');

ReactDOM.render(<IndescisionApp />, appRoot)