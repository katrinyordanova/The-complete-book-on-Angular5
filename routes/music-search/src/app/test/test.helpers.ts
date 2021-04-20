export class SpyObject {
    spy(name: string): any {
        if(!(this as any)[name]) {
            (this as any)[name] = jasmine.createSpy(name);
        }
        return (this as any)[name];
    }
}