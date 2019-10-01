import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Hoge = styled.div`
`;

class TopContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Hoge>
        <h3>{this.props.hoge}</h3>
        <button onClick={this.props.pushClicked}>hogeページへ移動</button>
      </Hoge>
    );
  }
}

TopContainer.propTypes = {
  hoge: PropTypes.string,
};

TopContainer.defaultProps = {
  hoge: 'hello world',
};

export default TopContainer;
