interface Params {
    path: string;
    name: string;
}
class Route {
    public constructor(private params: Params) {}

    public getPath(): string {
        return this.params.path;
    }

    public getName(): string {
        return this.params.name;
    }
}

class Router {
    private static routes: Route[] = [new Route({ path: '/', name: 'Home' })];

    public static getRoutes(): Route[] {
        return this.routes;
    }
}

export { Router, Route };
