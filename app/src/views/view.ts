
export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string){
        const element = document.querySelector(selector);
        if(element) {
           this.element = element as HTMLElement;
        }else{
            throw Error(`Selctor ${selector} não axiste no DOM!`)
        }
    }

    update(model: T): void {
        let  template = this.template(model);
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
    
}