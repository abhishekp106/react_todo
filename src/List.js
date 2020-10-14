import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';

const List = props => (
    <Grid container direction="column" justify="center" alignItems="center">
        {
            props.items.map((item, index) => 
                (
                <Card item xs={12}>
                    {item}
                    <ButtonGroup size="small" aria-labels="small outlined button group">
                        <Button>Edit</Button>
                        <Button onClick={() => props.delete(item)}>Delete</Button>
                    </ButtonGroup>
                </Card>
                )
            )
        }
    </Grid>
);

// onClick={() => this.props.delete(this.props.item)}
// <Grid direction="column" justify="center" alignItems="center" >
//     {
//             props.items.map((item, index) => (
//                 <Card item xs={12}>
//                     {item}
//                     <ButtonGroup size="small" aria-label="small outlined button group">
//                         <Button>Edit</Button>
//                         <Button>Delete</Button>
//                     </ButtonGroup>
//                 </Card>
//                 )
//             )
//     }
//     </Grid>
export default List;