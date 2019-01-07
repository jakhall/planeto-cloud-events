import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
    public currentUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);
}
