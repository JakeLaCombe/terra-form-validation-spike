import React from 'react';
import ReactDOM from 'react-dom';
import Base from 'terra-base';
import I18n from 'terra-i18n';

export default class MainEntry extends React.Component {
  render() {
    return (
      <h1>Hello People!</h1>
    );
  }
}

ReactDOM.render(React.createElement(MainEntry, null), document.getElementById('root'));
