import React,{Fragment} from 'react';

const Son = (props) => {
    const { footbalGirls } = props
    return (
       <Fragment>
            <div>son</div>
            <ul>
                {
                    footbalGirls.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
       </Fragment>
    );
}

export default Son;
