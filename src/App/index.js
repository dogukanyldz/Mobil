import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from 'react-native';

import {Modal} from '../Modal';
import {CurrencySelectButton} from './components/CurrencySelectButton';

export class ExchangeDroid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOne: 'TRY',
      currentTwo: 'USD',
      value: '1',
      modal: false,
      modalFor: 0,
      data: null,
    };
  }

  componentDidMount = () => {
    this._getData(this.state.currentOne);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState != this.state) {
      if (prevState.currentOne != this.state.currentOne) {
        this._getData(this.state.currentOne);
      }
    }
  };

  _onSelectCurrentOne = () => {};

  _setState = state => {
    this.setState({...state});
  };

  _getData = baseCurrency => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
      .then(async res => {
        if (res.ok) {
          const response = await res.json();
          this.setState({data: response});
        } else {
          console.log('HATA, then else');
        }
      })
      .catch(err => {
        console.log('HATA, catch');
      });
  };

  render() {
    const {currentOne, currentTwo, modal, modalFor, value, data} = this.state;

    return (
      <>
        <View style={Styles.content}>
          <Text style={Styles.title}>{'Dönüştür'}</Text>
        </View>
        <View style={Styles.flexItem}>
          <CurrencySelectButton
            current={currentOne}
            onPress={() => {
              this.setState({modal: true, modalFor: 0});
            }}
          />

          <View
            style={{
              display: 'flex',
              alignItems: 'flex-end',
            }}>
            <TextInput
              onChangeText={text => this.setState({value: text})}
              value={value}
              style={Styles.textarea}
              keyboardType="numeric"
            />
            {parseInt(this.state.value) > 1 && (
              <Text
                style={{
                  marginTop: 10,
                  color: 'black',
                  fontFamily: 'SFUIDisplay-Light',
                  fontSize: 18,
                }}>
                {'1 ' +
                  currentOne +
                  ' = ' +
                  data.rates[currentTwo] +
                  ' ' +
                  currentTwo}
              </Text>
            )}
          </View>
        </View>
        <View style={Styles.flexItem}>
          <CurrencySelectButton
            small
            onPress={() => {
              this.setState({currentOne: currentTwo, currentTwo: currentOne});
            }}
          />
          <TextInput
            value="0.00"
            style={[Styles.textarea, {opacity: 0}]}
            editable={false}
          />
        </View>
        <View style={Styles.flexItem}>
          <CurrencySelectButton
            current={currentTwo}
            onPress={() => {
              this.setState({modal: true, modalFor: 1});
            }}
          />

          <TextInput
            editable={false}
            value={
              data
                ? (data.rates[currentTwo] * parseFloat(value || '1'))
                    .toString()
                    .substr(0, 8)
                : '-'
            }
            style={[Styles.textarea, {borderBottomWidth: 0}]}
            keyboardType="numeric"
          />
        </View>
        {modal && (
          <Modal
            modalFor={modalFor}
            state={this.state}
            setModalState={this._setState}
          />
        )}
      </>
    );
  }
}

export const Styles = StyleSheet.create({
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontFamily: 'SFUIDisplay-Thin',
    color: 'black',
    marginBottom: 30,
  },
  flexItem: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exchangeIcon: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 30,
    marginRight: 20,
    borderWidth: 5,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textarea: {
    width: 200,
    fontSize: 45,
    fontFamily: 'SFUIDisplay-Thin',
    color: 'black',
    padding: 5,
    textAlign: 'right',
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
});
