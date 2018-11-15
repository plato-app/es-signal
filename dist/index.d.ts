export declare type SignalReceiver = (...args: any[]) => void;
export declare class Signal {
    private receivers;
    receive(receiver: SignalReceiver): void;
    ignore(receiver: SignalReceiver): void;
    purge(): void;
    emit(...args: any[]): void;
}
