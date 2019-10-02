import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


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

const Items = styled.ul`
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

const List = props => {

  return (
    <Outer
      height={props.itemHeight * props.viewNum}
    >
      <Inner height={props.itemHeight * props.itemNum}>
        <Items>
          {props.list.map((item, index) =>
            <Item key={index} height={props.itemHeight}>{item}</Item>
          )}
        </Items>
      </Inner>
    </Outer>
  );
};


List.propTypes = {
  list: PropTypes.array.isRequired,
  viewNum: PropTypes.number.isRequired, // 見える範囲に表示するItemの個数
  itemNum: PropTypes.number.isRequired, // Itemの総数
  itemHeight: PropTypes.number.isRequired, // Itemの高さ
};

List.defaultTypes = {
};

export default List;
