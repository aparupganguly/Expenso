import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

const MainPage = () => {
  const [heading, setHeading] = useState('Expenses Of This Month'); // temporary state

  // temporary function 👇

  const handleAdd = () => {
    // setHeading('New Heading!');
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />

      {/* // Main View : */}
      <View style={styles.container}>
        {/* Settings Icon Goes Here! */}

        {/* Seacrch Bar Goes Here!                                 Filter Goes Here! */}

        <View>
          <Text style={styles.heading}>
            {/* Expenses Of This Month */}

            {heading}
          </Text>
        </View>
        {/* Heading of Homepage [dynamic according to filter]*/}
        {/* Heading Ends Here! */}
        <ScrollView>
          <View style={styles.expenseContainer}>
            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>

              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>

            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>
          </View>
          <View style={styles.expenseContainer}>
            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>

            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>
          </View>

          <View style={styles.expenseContainer}>
            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>

            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>
          </View>
          <View style={styles.expenseContainer}>
            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>

            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>
          </View>
          <View style={styles.expenseContainer}>
            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>

            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>
          </View>
          <View style={styles.expenseContainer}>
            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>

            <View style={styles.expenses}>
              <Text style={styles.exensesText}>Movie Tickets</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>$6.79</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* ADD Button container */}
        <View style={styles.mainBtnContainer}>
          <TouchableOpacity
             onPress={handleAdd}
            style={styles.btnContainer}>
            <Text style={styles.primaryBtn}
            >ADD</Text>
          </TouchableOpacity>
        </View>
        {/* ADD Button container */}
      </View>
    </>

    //  Main View Ends
  );
};

export default MainPage;

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 26,
    color: '#EEF2E6',
    marginTop: 35,
  },
  container: {
    backgroundColor: '#3D8361',
    width: '100%',
    height: '100%',
  },
  primaryBtn: {
    textAlign: 'center',
    color: '#3D8361',
    fontSize: 24,
    fontFamily: 'JetBrainsMono-Regular',
  },
  btnContainer: {
    backgroundColor: '#D6CDA4',
    width: 176,
    height: 67,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  expenses: {
    backgroundColor: '#D6CDA4',
    width: 129,
    height: 129,
    margin: 15,
    marginTop: 20,
    borderRadius: 25,
  },
  exensesText: {
    fontFamily: 'JetBrainsMono-Regular',
    color: '#1E1E1E',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
  },
  expenseContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    fontFamily: 'JetBrainsMono-Regular',
    textAlign: 'center',
    color: '#1C6758',
    fontSize: 20,
  },
  priceContainer: {
    backgroundColor: '#EEF2E6',
    height: 58,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
