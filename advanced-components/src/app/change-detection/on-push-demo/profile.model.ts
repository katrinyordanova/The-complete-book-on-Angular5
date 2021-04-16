export class Profile {
    constructor(public first: string, public last: string) {}

    lastChanged(): Date {
        return new Date();
    }
}