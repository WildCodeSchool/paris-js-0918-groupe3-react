import React, { Component } from "react";
import $ from "jquery";
import iconInfo from "../images/icons/iconInfo.png"

import "./css/Toast.scss"

export default class Toast extends Component {
  componentDidMount() {
    $(function() {
      $(".toast").toast("show");
    });
  }
  render() {
    const { messageToast } = this.props;
    return (
      <div>
          <div
            className="toast"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            data-delay="4000"
          >
            <div className="toast-header p-3">
              <div className="row align-items-center justify-content-center">
                <div className="col-1">
                  <img src={iconInfo} alt="..." />
                </div>
                <div className="col-auto m-2">
                  <strong>{messageToast}</strong>
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
