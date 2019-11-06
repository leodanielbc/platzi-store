import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(event: Event){
    event.preventDefault(); // este evita recargarla pagina del formulario y ejecuta nuestra operacion con normalidad
    if(this.form.valid){
      const value = this.form.value;
      this.authService.login(value.email, value.password)
        .then(() => {
          this.router.navigate(['/admin']);
        })
        .catch((error) => {
          alert('No es valido');
        });
    }
  }

}
