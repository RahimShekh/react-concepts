import React from 'react'
import { useContext } from 'react'
import Wrapper from '../Wrapper';
import {demoContext} from "../Wrapper";

function Create() {
    const s = useContext(demoContext);
    console.log(s);
  return (
    <div>Create</div>
  )
}

export default Create