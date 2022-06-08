import React from 'react';
import { PageNotFoundStyled } from '../components/styles/PageNotFound.Styled';


const NotFound = ()=>{
    return(
        <PageNotFoundStyled>
            <div className="not-found">
                <h1>Page Not Found! Page Currently Under Development </h1>
            </div>
        </PageNotFoundStyled>
    )
}

export default NotFound;