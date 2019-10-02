import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

const MARGIN_ITEM_COUNT = 3;

const Outer = styled.div`
  width: 150px;
  height: ${props => props.height}px;
  background-color: rgba(0, 0, 255, 0.2);
  overflow-y: scroll;
`;

const Inner = styled.div`
  height: ${props => props.height}px;
  background-color: rgba(255, 0, 0, 0.2);
`;

const Items = styled.ul.attrs(props => ({
  style: {
    top: `${props.top}px`
  },
}))`
  position: relative;
  background-color: rgba(255, 255, 0, 0.2);
`;

const Item = styled.li`
  display: flex;
  height: ${props => props.height}px;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;

const VirtualList = props => {
  const [startIndex, setStartIndex] = useState(0);
  const displayedItemCount = Math.floor((props.itemHeight * props.viewNum) / props.itemHeight) + MARGIN_ITEM_COUNT;

  const handleScroll = e => {
    const scrollPosition = e.currentTarget.scrollTop;
    const displayedItemCount = Math.floor((props.itemHeight * props.viewNum) / props.itemHeight);
    const index = Math.floor(scrollPosition / props.itemHeight);
    if (index <= props.itemNum - displayedItemCount) {
      setStartIndex(index);
    }
  };

  const isDisplay = index => {
    return index >= startIndex && index < startIndex + displayedItemCount;
  };

  const filterItems = (items) => {
    return items.filter((_, index) => isDisplay(index));
  };

  return (
    <Outer
      height={props.itemHeight * props.viewNum}
      onScroll={handleScroll}
    >
      <Inner height={props.itemHeight * props.itemNum}>
        <Items top={startIndex * props.itemHeight}>
          {filterItems(props.list).map((item, index) =>
            <Item key={index} height={props.itemHeight}>{item}</Item>
          )}
        </Items>
      </Inner>
    </Outer>
  );
};

VirtualList.propTypes = {
  list: PropTypes.array.isRequired,
  viewNum: PropTypes.number.isRequired, // 見える範囲に表示するItemの個数
  itemNum: PropTypes.number.isRequired, // Itemの総数
  itemHeight: PropTypes.number.isRequired, // Itemの高さ
};

VirtualList.defaultTypes = {
};

export default VirtualList;
