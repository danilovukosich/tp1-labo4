import { Component,  Renderer2  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NgToastModule } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, NgToastModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'tp1';


  constructor(private renderer: Renderer2, private auth: AuthService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(()=>{

    }, 500);
  }


  LightDarkMode():void
  {
    let switchIcon:any = document.getElementById('light-dark-mode');
    const appBody:any = document.getElementById('body-app');
    
    
    if(switchIcon.className=='bx bxs-moon')
    {
      switchIcon.className='bx bxs-sun';
      this.renderer.setStyle(appBody, 'backgroundImage', `url('../assets/images/BackgroundDark.png')`);
      
    }
    else
    {
      switchIcon.className='bx bxs-moon';
      this.renderer.setStyle(appBody, 'backgroundImage', `url('../assets/images/BackgroundLight.jpg')`);
    }

  }

  LogOut()
  {
    this.auth.LogOut();
  }

 /*  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.LogOut();
  } */


  VerifyCurrentUser()
  {
    if(this.auth.GetUser()!=null)
    {
      return true;
    }
    else
    {
      return false;
    }

  }




}
