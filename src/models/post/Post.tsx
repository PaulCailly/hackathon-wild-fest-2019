import { format } from 'date-fns';

interface Params {
    excerpt: string;
    frontmatter: {
        title: string;
        date: string;
        tags: string[];
        image: any;
    };
    timeToRead: number;
    fields: {
        slug: string;
    };
}

export class Post {
    public constructor(private params: Params) {}

    public getExcerpt(): string {
        return this.params.excerpt;
    }

    public getTitle(): string {
        return this.params.frontmatter.title;
    }

    public getDate(): Date {
        return new Date(this.params.frontmatter.date);
    }

    public getFormattedDate(formatTemplate): any {
        return format(this.getDate(), formatTemplate);
    }

    public getTags(): string[] {
        return this.params.frontmatter.tags;
    }

    public getImage(): any {
        return this.params.frontmatter.image;
    }

    public getTimeToRead(): number {
        return this.params.timeToRead;
    }

    public getSlug(): string {
        return this.params.fields.slug;
    }
}
