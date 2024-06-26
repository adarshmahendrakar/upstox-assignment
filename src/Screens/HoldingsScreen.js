import React, {useEffect, useState} from 'react';
import HoldingDetails from '../Components/HoldingDetails/HoldingDetails';
import {Card} from '../GenericComponents/Card';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import FetchAPIData from '../Helpers/ApiActions';
import {Loader} from '../GenericComponents/Loader';
import Header from '../Components/Header/Header';
import SwipeableButton from '../Components/BottomSheetModel/BottomSheetModel';
import BottomSheetContent from '../Components/BottomSheetModel/BottomSheetContent';
import {
  error_manual_message,
  header_title,
  loading_message,
  ltp_text,
  pl_text,
} from '../constants';
import ShowError from '../GenericComponents/ShowError';

export const HoldingScreens = () => {
  const dispatch = useDispatch();
  const {data, error, loading} = useSelector(state => state.counter);

  const [extended, setExtended] = useState(false);

  useEffect(() => {
    dispatch(FetchAPIData());
  }, []);

  // If loading, render loading indicator
  if (loading) {
    return <Loader loading={loading_message} />;
  }

  // If error, render error message
  if (error) {
    return <ShowError error={error} manual_message={error_manual_message} />;
  }

  // Calculate P&L for each individual item
  const calculatePNL = holding => {
    const currentValue = holding.ltp * holding.quantity;
    const investmentValue = holding.avgPrice * holding.quantity;
    const pnl = currentValue - investmentValue;
    return pnl.toFixed(3); // trimming it to 3 decimal points as it was more than 6 decimal points
  };

  //FYR Calculate P&L for each holding
  const holdingsPNL = data?.userHolding?.map(holding => ({
    pnl: calculatePNL(holding),
  }));

  // Calculate Current value (Individual item)
  const calculateCurrentValue = holding => holding.ltp * holding.quantity;

  // Calculate Investment value (Individual item)
  const calculateInvestmentValue = holding =>
    holding.avgPrice * holding.quantity;

  // Calculate total Current value
  const totalCurrentValue = data?.userHolding?.reduce(
    (acc, holding) => acc + calculateCurrentValue(holding),
    0,
  );

  // Calculate total Investment value
  const totalInvestmentValue = data?.userHolding?.reduce(
    (acc, holding) => acc + calculateInvestmentValue(holding),
    0,
  );

  // Calculate Total PNL
  const totalPNL = totalCurrentValue - totalInvestmentValue; // here I have not trimmed the decimals  if we want to trim we can use totalPNL.toFixed(3); //FYR: calculatePNL();

  // Calculate Today’s PNL
  const todayPNL = data?.userHolding?.reduce(
    (acc, holding) => acc + (holding.close - holding.ltp) * holding.quantity,
    0,
  ); // here I have not trimmed the decimals  if we want to trim we can use todayPNL.toFixed(3); //FYR: calculatePNL();

  return (
    <>
      {/* title is accepted as props here from the Header component */}
      <Header title={header_title} />

      {/* used FlatList here,   symbol, quantity, ltp, pl, leftTitle, rightTitle is accepted as props here from the HoldingDetails component */}
      <FlatList
        data={data?.userHolding}
        renderItem={({item}) => (
          <Card>
            <HoldingDetails
              symbol={item.symbol || 'N/A'} // if data is missing then this will show N/A instead of throwing error (null case handling)
              ltp={`₹ ${item.ltp}` || 'N/A'}
              quantity={item.quantity || 'N/A'}
              pl={calculatePNL(item) || 'N/A'}
              leftTitle={`${ltp_text}: `}
              rightTitle={`${pl_text}: `}
            />
          </Card>
        )}
        keyExtractor={item => item.symbol}
        nestedScrollEnabled
      />

      {/* SwipeableButton component is having childrens,  swipeDistance, setExtended, is accepted as props here from the SwipeableButton component */}
      <SwipeableButton swipeDistance={5} setExtended={setExtended}>
        {/* SwipeableButton is a component which is having childrens, and here the children is used as BottomSheetContent component,    extended, currenValue, totalInvestmentValue, todaysPNL, totalPNL, is accepted as props here from the BottomSheetContent component */}
        <BottomSheetContent
          extended={extended}
          currenValue={totalCurrentValue || 'N/A'}
          totalInvestmentValue={totalInvestmentValue || 'N/A'}
          todaysPNL={todayPNL || 'N/A'}
          totalPNL={totalPNL || 'N/A'}
        />
      </SwipeableButton>
    </>
  );
};
