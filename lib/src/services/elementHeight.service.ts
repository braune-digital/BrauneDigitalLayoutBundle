import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElementHeightService {
  height$: Subject<number> = new Subject<number>();
}
