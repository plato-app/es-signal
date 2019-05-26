export declare type SignalReceiver = (...args: any[]) => void;
export declare class Signal<R extends SignalReceiver> {
    private receivers;
    receive(receiver: R): void;
    ignore(receiver: R): void;
    purge(): void;
    emit(...args: Parameters<R>): void;
}
