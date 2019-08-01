import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeightService {
  height$: Subject<number> = new Subject<number>();
}
