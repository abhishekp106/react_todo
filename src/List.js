import React from 'react'

const List = props => (
    <ul>
        {
            props.items.map((item, index) => {
            <div>
                {item}
                <div className="btn-group">
                    <button type="button" className="btn">
                        Edit <span className="visually-hidden">Repeat</span>
                    </button>
                    <button type="button" className="btn btn__danger">
                        Delete <span className="visually-hidden">Repeat</span>
                    </button>
                </div>
            </div>
            }
        }
    </ul>
);

export default List;