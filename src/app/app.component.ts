import { Component, OnDestroy } from '@angular/core';
import { AuthService } from "angular2-social-login";

@Component({
selector: 'my-app',
templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy
 {
  public user;
  sub: any;
  constructor(public authService: AuthService){ }
  
  signIn(provider){
    this.sub = this.authService.login(provider).subscribe(
      (data) => {
        console.log(data);
        this.user=data;
        localStorage.setItem('token',this.user.token);
      }
    )
  }

  logout()
  {
    this.authService.logout().subscribe
    (
      (data)=>
      {
        console.log(data);
        this.user=null;
        //localStorage.removeItem(this.user);
       localStorage.removeItem('token');
        //localStorage.clear();
      }
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
