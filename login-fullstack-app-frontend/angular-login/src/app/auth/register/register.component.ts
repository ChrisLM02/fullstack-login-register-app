import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { RegisterRequest } from 'src/app/services/registerRequest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registrationError: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService){
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      country: ['', Validators.required]
    });
  }
  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const userDetails: RegisterRequest = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
        firstname: this.registerForm.value.firstname,
        lastname: this.registerForm.value.lastname,
        country: this.registerForm.value.country
      };

      this.registerService.register(userDetails).subscribe(
        () => {
          // Registro exitoso, redirigir al formulario de inicio de sesión
          this.router.navigateByUrl('/iniciar-sesion');
        },
        error => {
          console.error('Error al registrar usuario:', error);
          this.registrationError = 'Error al registrar usuario. Por favor, inténtalo de nuevo.';
        }
      );
    } else {
      // El formulario es inválido, mostrar mensaje de error
      this.registrationError = 'Por favor, completa todos los campos correctamente.';
    }
  }


}
