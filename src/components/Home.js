import React, { Component } from 'react'
import CustomNavbar from './Navbar'
import "./home.css";


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          diabetes: '' // State to hold the selected value (Yes/No)
        };
      }
    
      handleChange = (e) => {
        this.setState({
          diabetes: e.target.value
        });
      };


  render() {
    return (
        <div>
            <CustomNavbar/>
            
            <div className='contain'>
            <div className='containers'>
                <div className='header'>
                    <div className='text'>NAFLD (Non-Alcoholic Fatty Liver Disease)</div>
                    <div className='underline'></div>
                    
                </div>
                <div className='inputs'>
                    <div className='group'>
                    <div className='text1' >AGE  </div>
                    <div className='input'>
                    
                     <input type='number' placeholder=''/>  
                    </div>
                    </div>
                    <div className='group'>
                    <div className='text1'>BMI</div>
                    <div className='input'>
                    
                     <input type='number' placeholder=''/>  
                    </div>
                    </div>
                    <div className='group'>
                <div className='text1'>Diabetes</div>
                <div className='input'>
                  <select value={this.state.diabetes} onChange={this.handleChange}>
                    <option value=''>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                  </select>
                </div>
              </div>
                    <div className='group'>
                    <div className='text1'>AST</div>
                    <div className='input'>
                    
                     <input type='number' placeholder=''/>  
                    </div>
                    </div>
                    <div className='group'>
                    <div className='text1'>ALT</div>
                    <div className='input'>
                    
                     <input type='number' placeholder=''/>  
                    </div>
                    </div>
                    <div className='group'>
                    <div className='text1'>Platelet count</div>
                    <div className='input'>
                    
                     <input type='number' placeholder=''/>  
                    </div>
                    </div>
                    <div className='group'>
                    <div className='text1'>Ablumin</div>
                    <div className='input'>
                    
                     <input type='number' placeholder=''/>  
                    </div>
                    </div>
                </div>
                <div className='submit-container'>
                    <div className='submit'>Submit</div>
                </div>
                

            </div>
            

            </div>

        </div>
      
    )
  }
}
