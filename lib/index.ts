/** Generic receiver callback */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SignalReceiver = (...args: any[]) => void;

/** Signal emitter */
export class Signal<R extends SignalReceiver = SignalReceiver> {

	/** Receivers */
	private readonly receivers: R[] = [];

	/** Number of receivers for this signal */
	public get receiverCount(): number {
		return this.receivers.length;
	}

	/**
	 * Attaches a receiver to this signal
	 * @param receiver Signal receiving callback function
	 */
	public receive(receiver: R): void {
		this.receivers.push(receiver);
	}

	/**
	 * Detaches a reciever from this signal
	 * @param receiver Signal receiving callback function
	 */
	public ignore(receiver: R): void {
		const index = this.receivers.indexOf(receiver);
		if (index !== -1) {
			this.receivers.splice(index, 1);
		}
	}

	/** Detaches ALL receivers from this signal */
	public purge(): void {
		this.receivers.length = 0;
	}

	/**
	 * Emits this signal by notifying all receivers
	 * @param args Arguments passed to receivers of this signal
	 */
	public emit(...args: Parameters<R>): void {
		for (const receiver of this.receivers) {
			receiver(...args);
		}
	}

}
