import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, mergeClassName, withClassName, withDrop } from '../utilities';
import { BDiv } from './dom';

class ButtonToolbar extends Component {
  render() {
    const { lg, sm, toggle } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        lg? 'btn-group-lg' : '',
        sm? 'btn-group-sm' : '',
        toggle? 'btn-group-toggle' : ''
      ]
    );
    const p = JS.lessProps(
      this.props,
      ['className', 'role', 'lg', 'sm', 'vertical', 'toggle']
    );

    return toggle
      ? <BDiv role="toolbar" className={cn} {...p} data-toggle="buttons">{this.props.children}</BDiv>
      : <BDiv role="toolbar" className={cn} {...p}>{this.props.children}</BDiv>
  }
}

function toolbarClassName(props) {
  const { vertical } = props;
  return vertical? 'btn-toolbar-vertical' : 'btn-toolbar';
}

export default stack(
  ButtonToolbar,
  [
    withClassName(toolbarClassName),
    withDrop()
  ]
);
