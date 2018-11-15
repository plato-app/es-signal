/** Generic receiver callback */
export type SignalReceiver = (...args: any[]) => void;

/**
 * Signal emitter
 */
export class Signal {

	/** Receivers */
	private receivers: SignalReceiver[] = [];

	/**
	 * Attaches a receiver to this signal
	 * @param receiver Signal receiving callback function
	 */
	public receive(receiver: SignalReceiver) {
		this.receivers.push(receiver);
	}

	/**
	 * Detaches a reciever from this signal
	 * @param receiver Signal receiving callback function
	 */
	public ignore(receiver: SignalReceiver) {
		const index = this.receivers.indexOf(receiver);
		if (index !== -1) {
			this.receivers.splice(index, 1);
		}
	}

	/**
	 * Detaches ALL receivers from this signal
	 */
	public purge() {
		this.receivers.length = 0;
	}

	/**
	 * Emits this signal by notifying all receivers
	 * @param args Arguments passed to receivers of this signal
	 */
	public emit(...args: any[]) {
		for (const receiver of this.receivers) {
			receiver(...args);
		}
	}

}
