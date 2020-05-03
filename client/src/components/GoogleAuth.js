import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client: auth2', () =>{
            window.gapi.client.init({
                clientId: '68354859266-3vabbrmi6asop5qhpg8ohbc1vpei8sjp.apps.googleusercontent.com ',
                scope: 'email'
            });
        });
    }
    
    render(){
        return <div>GoogleAuth</div>;
    }
}

export default GoogleAuth;