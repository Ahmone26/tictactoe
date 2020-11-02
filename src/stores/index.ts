
import TicTacStore from './TicTacStore';

export interface IStores {
	rootStore: RootStore,
	ticTacStore: TicTacStore,
}

export class RootStore {
	public stores: IStores = {
		rootStore: this,
		ticTacStore: new TicTacStore(),
	};

}

const rootStore = new RootStore();

export default rootStore;