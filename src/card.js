import React, {Component } from 'react'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'FOULEN',
            monthyear:'12 08',
            num:'**** **** **** ****'
         }
    }
    //to change name
    nameChage = (n) => {
        let regex = /^([a-z ]+)$/;
        if (regex.test(n.target.value)) 
        {
          this.setState({
              name:n.target.value.toUpperCase()
          })

        }

    }
    /*number change*/

    numberChange=(e)=>{
        let regex=/^([1-9]+)$/;
        if(regex.test(e.target.value))
        {
            this.setState({
                num:( e.target.value.padEnd(16, "*").replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, ''))
            })
        }
    }

    /*validthru*/
    validthru = (event)=>{
        let regex=/^[1-9/b]+$/;
        if (event.target.value.slice(0, 2) <= 12) {
            if ((event.target.value.slice(0, 2).match(regex)))
             {
                this.setState({
                    monthyear:
                        event.target.value.slice(0, 1).padStart(2, "0") + "/" +
                        event.target.value.slice(2, 4)

                })
            }
            this.setState({
                monthyear:
                    event.target.value.slice(0, 2) + "/" +
                    event.target.value.slice(2, 4)
            });

        }
    }
    render() { 
        return ( 
        <div>
            <div className="card">
                <h1>Credit Card</h1>
                <img src="http://pngtransparent.com/images/sim-card-png-347x231_715f7ac2.png"/>
                <div className='info'>

                        <div className="num">{this.state.num}</div> 
                        <h5>{this.state.monthyear}</h5>
                        <span>{this.state.name}</span>
                </div>
                <img className="log" src="https://freelogovector.net/wp-content/uploads/logo-images-14/mastercard-logo-vector-91217.png"/>


            </div>
            <div className="input">
                    <input maxlength="16" type="text" placeholder="**** **** **** ****" onChange={this.numberChange}/>
                    <input maxlength="20" type="text" placeholder="tapez votre nom" onChange={this.nameChage}/>
                    <input type="text" placeholder="MM/YY" onChange={this.validthru} maxLength="4"/>
            </div>
        </div> 
         );
               
    }
}
 
export default Card;
