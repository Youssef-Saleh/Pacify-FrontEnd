import React from 'react';
import InputCreate from "../InputCreate"
import Adapter from "enzyme-adapter-react-16";
import {shallow,configure,mount,sinon,spy} from 'enzyme'


configure({adapter: new Adapter()});
//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("MediaObject test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<InputCreate/> ); 
  });

  it("Should have  button", ()=>{
    const button= wrapper.find("button");
    expect(button).toHaveLength(3);
  })
  it("Should have a inputbox", ()=>{
    const input= wrapper.find("input");
    expect(input).toHaveLength(1);
  })
  it("Should have playlist-container", ()=>{
    const card= wrapper.find("div");
    expect(card).toHaveLength(11);
  })
  
  it("it should render successfully inshallah",() =>{
expect(1).toBe(1)

}

)
});