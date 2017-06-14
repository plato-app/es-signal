/**
 * Signal emitter
 */
export class Signal {

	/** Receivers */
	private receivers: Function[] = []

	/**
	 * Attaches a receiver to this signal
	 * @param receiver - Signal receiving callback function
	 */
	receive (receiver: Function): void {
		this.receivers.push(receiver)
	}

	/**
	 * Detaches a reciever from this signal
	 * @param receiver - Signal receiving callback function
	 */
	ignore (receiver: Function): void {
		let index = this.receivers.indexOf(receiver)
		if (index !== -1) {
			this.receivers.splice(index, 1)
		}
	}

	/**
	 * Detaches ALL receivers from this signal
	 */
	purge (): void {
		this.receivers.length = 0
	}

	/**
	 * Emits this signal by notifying all receivers
	 * @param args - Arguments passed to receivers of this signal
	 */
	emit (...args: any[]): void {
		for (let receiver of this.receivers) {
			receiver(...args)
		}
	}

}
