import React from 'react';

class Tabs extends React.Component {
    static defaultProps = {
        tabs: []
    };
    
    state = {
        currentTabIndex: 0
    }

    handleClick = (i) => {
        this.setState({
            currentTabIndex: i
        })
    }

    renderButtons  = () =>  {
        return this.props.tabs.map((tab, i) => (
            <button key={i} onClick={() => this.handleClick(i)}>
                {tab.name}
            </button>
            ))
             
        
    }

    renderContent() {
        const { tabs } = this.props;
        const { currentTabIndex } = this.state;
        
        const tabToDisplay = tabs[currentTabIndex]
        
        return (
            <div className="content">
            {tabToDisplay.content}
         </div>

        )
        
    }
    
    render() {
        
        return (
            <div>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
                
                
            </div>
        )
    }
}

export default Tabs;