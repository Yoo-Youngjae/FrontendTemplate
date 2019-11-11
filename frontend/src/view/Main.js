import React, { Component } from 'react';
import '../App.css'
import caro1 from '../assets/img/caro1.png'
import caro2 from '../assets/img/caro2.png'
import caro3 from '../assets/img/caro3.png'
import {Carousel} from 'react-bootstrap'
import axios from 'axios'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            hid:0,
            showCamera: false
        }
    }
    clickGet = () => () => {
        axios.get('/api/first/')
            .then( res => {
            console.log(res);
        }).catch( error =>{
            console.log(error);
        })
    }
    clickPost = () => () => {
        axios.post('/api/signup/',{
            username : 124,
            password : 124
        })
            .then( res => {
                console.log(res);
            }).catch( error =>{
            console.log(error);
        })
    }
    render() {
        return (
            <div className='f-xlarge t-center'>
                <div className='d-flex'>
                    <div className='w-33'></div>
                    <div className='w-33'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={caro1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={caro2}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={caro3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className='d-flex d-ho-center'>
                    <button id='fever-mode-click-end' onClick={this.clickGet()} className='button-orange-s mt-5'>GET</button>
                </div>
                <div className='d-flex d-ho-center'>
                    <button id='fever-mode-click-end' onClick={this.clickPost()} className='button-orange-s mt-5'>POST</button>
                </div>
                <div className='mt-5'>Let yourself focus.</div>
                <div className='mt-5'>Take record of your concentrated Time</div>
            </div>
        )
    }
}
export default Main;