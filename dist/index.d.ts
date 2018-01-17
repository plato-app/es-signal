export declare class Signal {
    private receivers;
    receive(receiver: Function): void;
    ignore(receiver: Function): void;
    purge(): void;
    emit(...args: any[]): void;
}
