import React from 'react';
import { PageNotFoundStyled } from '../components/styles/PageNotFound.Styled';


const NotFound = ()=>{
    return(
        <PageNotFoundStyled>
            <div className="not-found">
                <h1>Page Not Found!Please Check the Url </h1>
            </div>
        </PageNotFoundStyled>
    )
}

export default NotFound;