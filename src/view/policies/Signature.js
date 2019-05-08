/*
Copyright 2018 Keyhole Software LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { Component } from 'react';

class Signature extends Component {
  render() {
    let label = <div className="col-md-3">{this.props.label}</div>;

    let nofn = (
      <div className="col-md-3">
        N of{' '}
        <input
          name={this.props.name}
          ref={this.props.name}
          defaultValue={this.props.nofn}
          type="text"
          onChange={this.handleChange}
          className="input-xlarge"
        />{' '}
      </div>
    );

    let options = [];

    for (var o in this.props.sigs) {
      options.push(
        <option
          value={this.props.sigs[o]}
          selected={this.orgselected(this.props.sigs[o], this.props.msporgs)}>
          {this.props.sigs[o]}
        </option>
      );
    }

    let signatures = (
      <div className="col-md-3">
        Sub:{' '}
        <select
          multiple
          disabled={this.props.edit === false}
          name={this.props.name + 'signaturemsp'}
          className="form-control"
          onChange={this.props.onChange}>
          {options}
        </select>
      </div>
    );

    let typeselect = null;

    typeselect = (
      <div className="col-md-3">
        <select
          disabled={this.props.edit === false}
          className="form-control"
          name={this.props.name + 'policytype'}
          onChange={this.props.onChange}>
          <option value="IMPLICIT_META" selected={this.selected(this.props.type, 'IMPLICIT_META')}>
            IMPLICIT_META
          </option>
          <option value="SIGNATURE" selected={this.selected(this.props.type, 'SIGNATURE')}>
            SIGNATURE
          </option>
        </select>{' '}
      </div>
    );

    let ordererpolicyadminselect = (
      <div className="row">
        {' '}
        {label} {typeselect} {nofn} {signatures}{' '}
      </div>
    );

    return ordererpolicyadminselect;
  }

  selected(l, r) {
    return l === r ? ' selected ' : '';
  }

  orgselected(l, orgs) {
    let result = '';
    for (var i in orgs) {
      if (l === orgs[i]) {
        return 'selected';
      }
    }

    return result;
  }
}

export default Signature;
