import React from 'react';
import Paragraph from "../Paragraph"
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
   wrapper = shallow(<Paragraph/> ); 
  });

  it("Should have  button", ()=>{
    const button= wrapper.find("button");
    expect(button).toHaveLength(1);
  })
  it("Should have headers", ()=>{
    const headers= wrapper.find("h1");
    expect(headers).toHaveLength(1);
  })
  it("Should have paragraphs", ()=>{
    const paragraphs= wrapper.find("p");
    expect(paragraphs).toHaveLength(1);
  })
  
  
it("it should render successfully inshallah",() =>{

expect(1).toBe(1)

}

)
});