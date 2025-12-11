
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContactoComponent {
  private fb = inject(FormBuilder);
  
  submissionStatus = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
  });

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submissionStatus.set('sending');
      console.log('Formulario enviado:', this.contactForm.value);
      // Simular llamada a API
      setTimeout(() => {
        this.submissionStatus.set('success');
        this.contactForm.reset();
      }, 1500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.submissionStatus.set('idle');
  }
}
