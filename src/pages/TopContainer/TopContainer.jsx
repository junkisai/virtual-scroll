import React from 'react';

import VirtualList from '../../components/VirtualList';

class TopContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = [...Array(500).keys()].map(i => i + 1700);

    return(
      <VirtualList
        list={list}
        viewNum={5}
        itemNum={list.length}
        itemHeight={30}
      />
    );
  }
}

TopContainer.propTypes = {
};

TopContainer.defaultProps = {
};

export default TopContainer;
