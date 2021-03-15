export class Article {
    title: string;
    website: string;
    votes: number;

    constructor(title: string, website: string, votes?: number) {
        this.title = title;
        this.website = website;
        this.votes = votes || 0;
    }
}