import React from 'react'
import { inject, observer } from 'mobx-react';
// import { toJS } from 'mobx';

import TicTacStore from '../stores/TicTacStore';


type TicTacProps = {
  ticTacStore?: TicTacStore;
}

const Home: React.FunctionComponent<TicTacProps> = inject('ticTacStore')(observer(({ ticTacStore }) => {

  const style = {
    width: "25px",
    height: "25px",
    margin: "10px"
  }
  const reset = {
    marginTop: "50px",
    width: "80px",
    height: "50px",
    fontSize: "1em",
    fontStyle: "bold",
    padding: "2px",
    background: "red",
    color: "white"
  }
  // const X = "X";
  const X = ticTacStore?.users[0];
  const O = ticTacStore?.users[1];
  // const O = "O";


  const Show = (props: any) => {
    const id = props.id;
    if (id === 1) {
      return X;
    }
    if (id === 2) {
      return O;
    } else {
      return "";
    }
  };

  return (

    <div style={{ backgroundColor: 'white', margin: '0 auto', width: '70%', height: '500px', textAlign: 'center', padding: '45px' }}>
      <h1>{ticTacStore?.gameName}</h1>
      <h2>{ticTacStore?.gamestatus ? ticTacStore?.gamestatus : `turn = ${ticTacStore?.users[ticTacStore?.turn - 1]}`}</h2>
      {(ticTacStore?.compareArray).map((i: any) => {
        return (
          <span key={i}>
            <button style={style} disabled={ticTacStore?.game_ended} onClick={() => ticTacStore?.updatetictac(i)}>
              <Show id={ticTacStore?.tictac[i]} />
            </button>
            { i === 2 ? <br /> : ''}
            { i === 5 ? <br /> : ''}
            { i === 8 ? <br /> : ''}
          </span>
        )})}
      <button style={reset} onClick={() => ticTacStore?.resetgame()}>
        Reset Game
      </button>
    </div>
  )
}))

export default Home;
