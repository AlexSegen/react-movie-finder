import React, { Component } from 'react';

export class NotFound extends Component {
    render() { 
        return ( 
            <div className="content__no-results fade-in">
                <img src="/img/no-result.svg" alt="Movie not found" className="no-result" />
                <span>We couldn't find your movie</span>
            </div>
         );
    }
}
 