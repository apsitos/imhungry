// import Coordinates from '../Helpers/Coordinates';
import Main from '../Main/Main';

const mapStateToProps = (state) => {
  return {
    data: state.main
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findCoordinates: (data) => {
      dispatch(findCoordinates(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
