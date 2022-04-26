import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../authentication.service";

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})
export class HeaderComponent{

    constructor(public authService:AuthenticationService, private router: Router){

    }

    logout(){
        this.authService.logout().subscribe(() => {
            localStorage.removeItem('uid')
            this.router.navigate([''])
        })
        
    }
}