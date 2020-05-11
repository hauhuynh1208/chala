import React from 'react';
import styles from './styles';
import {View, Image} from 'react-native';

export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    let {currentIndex} = this.state;
    this.intervalId = setInterval(() => {
      if (currentIndex === this.props.slide.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
      this.setState({currentIndex});
    }, 1500);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const {slide} = this.props;
    return (
      <View style={styles.slideContainer}>
        {slide.length ? (
          <Image
            source={{uri: slide[this.state.currentIndex].hinhsp}}
            style={styles.slide}
          />
        ) : null}
      </View>
    );
  }
}
