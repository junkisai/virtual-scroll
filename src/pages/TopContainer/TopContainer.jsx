import React from 'react';
import styled from 'styled-components';

import List from '../../components/List';
import VirtualList from '../../components/VirtualList';

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

class TopContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let years = [...Array(500).keys()].map(i => i + 1700);
    let months = [...Array(12).keys()].map(i => i + 1);
    let days = [...Array(30).keys()].map(i => i + 1);

    return(
      <div>
        <FlexBox>
          <VirtualList
            list={years}
            viewNum={5}
            itemNum={years.length}
            itemHeight={30}
          />
          <VirtualList
            list={months}
            viewNum={5}
            itemNum={months.length}
            itemHeight={30}
          />
          <VirtualList
            list={days}
            viewNum={5}
            itemNum={days.length}
            itemHeight={30}
          />
        </FlexBox>

        <FlexBox>
          <List
            list={years}
            viewNum={5}
            itemNum={years.length}
            itemHeight={30}
          />
          <List
            list={months}
            viewNum={5}
            itemNum={months.length}
            itemHeight={30}
          />
          <List
            list={days}
            viewNum={5}
            itemNum={days.length}
            itemHeight={30}
          />
        </FlexBox>
      </div>
    );
  }
}

TopContainer.propTypes = {
};

TopContainer.defaultProps = {
};

export default TopContainer;
