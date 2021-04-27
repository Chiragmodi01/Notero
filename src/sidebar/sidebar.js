import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebaritem';

class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addindNote: false,
            title: null
        }
    }
    render() {

        const { notes, classes, selectedNoteIndex } = this.props;


        return(
        <div className={classes.sidebarContainer}>
            <Button
            onClick={this.newNoteBtnClick}
            className={classes.newNoteBtn}>NEW NOTE</Button>
            {
                this.state.addingNote ?
                
                <div>
                    <input type='text'
                    className={classes.newNoteInput}
                    placeholder='Enter note title'
                    onKeyUp= {(e) => this.updateTitle(e.target.value)}>
                    </input>
                </div> :
                null
            }
        </div>
        );
    }
}

newNoteBtnClick = () => {
    console.log('new btn clicked');
}
updateTitle = (txt) => {
    console.log('HERE IT IS: ', txt);
}

export default withStyles(styles)(SidebarComponent);