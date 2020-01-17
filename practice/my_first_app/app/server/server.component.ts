import { Component } from '@angular/core';

@Component({
    selector: '[app-server]',
    templateUrl:'./server.component.html'
})
export class serverComponent{
    serverId:number=10;
    serverStatus:string = 'offline1';
    getServerStatus(){
        return this.serverStatus;
    }
        allnewvar = false;
    constructor(){
        
            setTimeout(() => {
                this.allnewvar = true;
            },4000);
        
    }
    serverPresent = "no server is running currently";
    serverRun(){
        this.serverPresent = "server started successfully";
    }
}