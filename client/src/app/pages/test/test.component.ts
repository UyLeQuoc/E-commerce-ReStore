import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../../store/counter.store';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  readonly store = inject(CounterStore);
}
