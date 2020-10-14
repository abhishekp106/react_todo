import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

class Task extends React.Component {
    render() {
        return (
            <Card 
                className="task"
                onClick={() => this.props.onClick()}>
                    {this.props.item}
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <Button>Edit</Button>
                        <Button onClick={() => this.props.delete(this.props.item)}>Delete</Button>
                    </ButtonGroup>
            </Card>
        );
    }
}


export default Task;