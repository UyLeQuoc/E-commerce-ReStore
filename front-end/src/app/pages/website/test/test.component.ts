import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CounterStore } from '../../../store/counter.store';
import { TestAPIService } from '../../../services/test-api.service';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ButtonModule, ToastModule ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  providers: [MessageService],
})
export class TestComponent {
  readonly store = inject(CounterStore);

  constructor(private messageService: MessageService, private testApiService: TestAPIService) {}

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showInfo() {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showWarn() {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }

  showError() {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

  // api error handling
  test400Error() {
    this.testApiService.get400Error().subscribe(
      (v) => console.log(v),
      (e) => {
        this.messageService.add({ severity: 'error', summary: e.title, detail: e.message });
      },  // Logs the error message
      () => console.log('complete')
    );
  }
  test401Error() {
    this.testApiService.get401Error().subscribe(({
      next: (v) => console.log(v),
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: e.title, detail: e.message });
      },
      complete: () => console.log('complete') 
    }));
  }
  test404Error() {
    this.testApiService.get404Error().subscribe(({
      next: (v) => console.log(v),
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: e.title, detail: e.message });
      },
      complete: () => console.log('complete') 
    }));
  }
  test500Error() {
    this.testApiService.get500Error().subscribe(({
      next: (v) => console.log(v),
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: e.title, detail: e.message });
      },
      complete: () => console.log('complete') 
    }));
  }
  testValidationError() {
    this.testApiService.getValidationError().subscribe(({
      next: (v) => console.log(v),
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: e.title, detail: e.errors.Problem1 });
        this.messageService.add({ severity: 'error', summary: e.title, detail: e.errors.Problem2 });
        console.log(e);
      },
      complete: () => console.log('complete') 
    }));
  }

}
