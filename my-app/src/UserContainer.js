import React, { Component } from 'react'
import './UserContainer.css'
import  data from './data'


export default class UserContainer extends Component {
    constructor(){
        super()

        this.state = {
            people: data,
        }

        
        
    }

    render(){
        const peopleArray = this.state.people.map((element, index) => {
            return <div>{element.name.first}  
                <div>{element.city}</div>
            </div>
        })
        return(
            <div>
                {peopleArray}
            </div>
           

        )
    }
}