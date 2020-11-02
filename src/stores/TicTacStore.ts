import { action, observable, makeObservable } from "mobx";

class TicTacStore {

  @observable gameName = 'Tic Tac Toe'
  @observable users: any = ["X", "O"];
  @observable turn: any = 1;
  @observable tictac: any = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  @observable compareArray: any = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  @observable gamestatus: any = null;
  @observable game_ended: boolean = false;


  constructor() {
    makeObservable(this)
  }

  @action check = (one: any, two: any, three: any) => {
    if (one !== 0 && two !== 0 && three !== 0) {
      if (one === two && two === three) {
          this.game_ended = true;
          this.gamestatus = this.users[this.turn - 1] + " - Won the Game";
      }
    }
  };

  @action checkwon = () => {
    this.check(this.tictac[0], this.tictac[1], this.tictac[2]);
    this.check(this.tictac[3], this.tictac[4], this.tictac[5]);
    this.check(this.tictac[6], this.tictac[7], this.tictac[8]);
    this.check(this.tictac[0], this.tictac[3], this.tictac[6]);
    this.check(this.tictac[1], this.tictac[4], this.tictac[7]);
    this.check(this.tictac[2], this.tictac[5], this.tictac[8]);
    this.check(this.tictac[0], this.tictac[4], this.tictac[8]);
    this.check(this.tictac[2], this.tictac[4], this.tictac[6]);
    if (this.turn === 1) {
      this.turn = 2;
    } else {
      this.turn = 1;
    }
  };

  @action updatetictac = (id: any) => {
    if (this.tictac[id] === 0) {
      this.tictac[id] = this.turn;
      this.checkwon();
    }
  };

  @action resetgame = () => {
    this.turn = 1;
    this.tictac = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.gamestatus = null;
    this.game_ended = false;
  };
}

export default TicTacStore;