import React, { Component } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { valueChanged, encodeMessage, decodeMessage } from '../../store/actions';
import { connect } from "react-redux";

class CodeMachine extends Component {

  render () {
    const { message, password, encoded, valueChanged, encodeMessage, decodeMessage } = this.props

    const checkDisabled = (str, pass) => {
      let result = true;
      if (str !== '' & pass !== '') {
        result = false
      }
      return result
    }
   
    return (
      <div className="container">
        <div className = 'border mt-5'>
          <div className="input-group p-3">
            <textarea disabled={encoded.length > 0} style={{resize: "none"}} rows="6" value={message} onChange={valueChanged} name="message" className="form-control" placeholder="Enter message to encode"/>
          </div>
          <div className="input-group p-3">
            <input type="text" value={password} onChange={valueChanged} name="password" className="form-control" placeholder="Enter password"/>
            <div className="input-group-append ml-2">
              <button className="close" onClick={() => encodeMessage(message, password)} disabled={checkDisabled(message, password)} type="button"><FaArrowCircleDown/></button>
              <button className="close" onClick={() => decodeMessage(encoded, password)} disabled={checkDisabled(encoded, password)}type="button"><FaArrowCircleUp/></button>
            </div>
          </div>
          <div className="input-group p-3">
            <textarea disabled={message.length > 0} style={{resize: "none"}} rows="6"  value={encoded} onChange={valueChanged} name="encoded" className="form-control" placeholder="Enter encoded message to decode"/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  message: state.message,
  password: state.password,
  encoded: state.encoded
});

const mapDispatchToProps = dispatch => ({
  valueChanged: event => dispatch(valueChanged(event)),
  encodeMessage: (message, pass) => dispatch(encodeMessage(message, pass)),
  decodeMessage: (encoded, pass) => dispatch(decodeMessage(encoded, pass))
})

export default connect(mapStateToProps, mapDispatchToProps) (CodeMachine);