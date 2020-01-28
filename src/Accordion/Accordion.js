import React from 'react';


class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
        activeButton: ''
    }

    handleClick = (i) => {
        this.setState({ 
            activeButton: i
        })
    }

    renderButtons = () => {
        const { activeButton } = this.state;
        const { sections } = this.props;
        const buttons = sections.map((button, i) => 
            <li key={i}><button onClick={() => this.handleClick(i)}>
                    {button.title}
                </button>
                {(activeButton === i) && 
                <p>{button.content}</p> }
            </li>)
        return buttons
    }
    
    render() {
        
        return (
            <div>
                <ul>
                {this.renderButtons()}

                </ul>
                
            </div>
            
        )
    }
}

export default Accordion;