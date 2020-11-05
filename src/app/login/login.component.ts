import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService} from '../auth/login/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  })

  loading = false;
  submit = false;
  usuarioInvalido = false;

  constructor(private fb: FormBuilder, 
              private authService: AuthApiService, 
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    const crendentials = this.loginForm.value;
    this.loading = true;
    this.submit = true;
    
    if(this.loginForm.invalid){
      this.loading = false;
      return;
    }
      

    this.authService.login(crendentials)
      .subscribe(
        (user) => {
          console.log(user);
          console.log(localStorage.getItem('token'));
          this.router.navigateByUrl('/home');
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.usuarioInvalido = true;       
          this.loading = false;
        }

      )
    
  }
  
}
