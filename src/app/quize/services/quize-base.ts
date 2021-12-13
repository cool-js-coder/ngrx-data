import { Directive } from "@angular/core"

@Directive()
export class QuizeBase {
    constructor(){

    }

    loader(loadingObservables) {
        loadingObservables.map(load => {
            load.subscribe( res => console.log(res))
        })
    }
}