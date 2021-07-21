import React, { Component } from 'react';
import styles from './../../Classes.module.css';


class NotFound extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             str: ''
        }
    }

    strRender = () => {

        const errorStr = 'PAGE NOT FOUND!';
        const timeout = 700;
        let renderingStr = '';
        let i = 0;

        const strPromise = new Promise( (resolve, reject) => {

            setTimeout( () => {
                renderingStr += errorStr.split(' ')[i];
                this.setState({ str: renderingStr });
                i++;
                resolve(true);
            }, timeout);
        });

        strPromise.then( result => {

            return new Promise( (resolve, reject) => {
                setTimeout( () => {
                    renderingStr += ` ${errorStr.split(' ')[i]}`;
                    this.setState({ str: renderingStr });
                    i++;
                    resolve(true);
                }, timeout);
            } )
        }).then( result => {

            return new Promise( (resolve, reject) => {
                setTimeout( () => {
                    renderingStr += ` ${errorStr.split(' ')[i]}`;
                    this.setState({ str: renderingStr });
                }, timeout);
            } )
        })
    }

    componentDidMount() {
        this.strRender();
    }

    render() {
        const { str } = this.state;
        const { history } = this.props;

        setTimeout( () => history.push('/home'), 3000 );

        return (
            <div className={styles.pageNotFound}>{str}</div>
        )
    }
}

export default NotFound;
