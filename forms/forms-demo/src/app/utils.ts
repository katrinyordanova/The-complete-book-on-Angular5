export class ConsoleSpy {
    public logs: string[] = [];

    log(...args): void {
        this.logs.push(args.join(' '));
    }

    warn(...args): void {
        this.log(...args)
    }
}