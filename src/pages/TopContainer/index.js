import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import TopContainer from './TopContainer';

const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = dispatch => ({
  getHoge: hoge => {
    dispatch(getHoge(hoge))
  },
  pushClicked: () => dispatch(push('/hoge')),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopContainer);
