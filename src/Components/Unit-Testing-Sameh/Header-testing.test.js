import React from 'react';
import HeaderBackground from '../HeaderBackground'
import Adapter from "enzyme-adapter-react-16";
import {shallow,configure} from 'enzyme'

configure({adapter: new Adapter()});
//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("MediaObject test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<HeaderBackground/> ); 
  });

  it("Should have a searchbox", ()=>{
    const search= wrapper.find("input");
    expect(search).toHaveLength(1);
  })
  it("Should have a header", ()=>{
    const header= wrapper.find("h1");
    expect(header).toHaveLength(1);
  })
  it("Should have a container", ()=>{
    const container= wrapper.find(".container");
    expect(container).toHaveLength(1);
  })
it("it should render successfully inshallah",() =>{

expect(1).toBe(1)

}

)
});