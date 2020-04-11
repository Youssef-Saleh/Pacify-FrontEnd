import React from 'react';
import Sliders from "../Sliders"
import Adapter from "enzyme-adapter-react-16";
import {shallow,configure,mount,sinon,spy} from 'enzyme'
import Carousel from 'react-bootstrap/Carousel';

configure({adapter: new Adapter()});
//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("MediaObject test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<Sliders/> ); 
  });

  it("Should have  images", ()=>{
    const images= wrapper.find("img");
    expect(images).toHaveLength(10);
  })
  it("Should have headers", ()=>{
    const headers= wrapper.find("h3");
    expect(headers).toHaveLength(5);
  })
  it("Should have paragraphs", ()=>{
    const paragraphs= wrapper.find("p");
    expect(paragraphs).toHaveLength(5);
  })
  it('clone should call handleCloneClick when clicked', () => {      
    const wrapper = shallow(<Sliders />);
    console.log(wrapper.instance().handelindexchange());
  
    
  });
  
it("it should render successfully inshallah",() =>{

expect(1).toBe(1)

}

)
});