import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class IonicRatingService {
    constructor() {
        this.starRatingSubject = new Subject();
        this.topicSubject = new Subject();
    }
    publishStartRatingChanged(value) {
        this.starRatingSubject.next(value);
    }
    getStartRatingChangedObservable() {
        return this.starRatingSubject;
    }
    publishTopic(topic, value) {
        this.topicSubject.next({ topic, value });
    }
    getTopicObservable(key) {
        return this.topicSubject[key];
    }
}
IonicRatingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonicRatingService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
IonicRatingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonicRatingService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonicRatingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtcmF0aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lvbmljLXJhdGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0IsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUtVLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDMUMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBMEIsQ0FBQztLQWlCOUQ7SUFmQyx5QkFBeUIsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELCtCQUErQjtRQUM3QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWEsRUFBRSxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGtCQUFrQixDQUFDLEdBQUc7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dIQW5CVSxrQkFBa0I7b0hBQWxCLGtCQUFrQixjQUZqQixNQUFNOzRGQUVQLGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIElvbmljUmF0aW5nU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzdGFyUmF0aW5nU3ViamVjdCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSB0b3BpY1N1YmplY3QgPSBuZXcgU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IGFueSB9PigpO1xuXG4gIHB1Ymxpc2hTdGFydFJhdGluZ0NoYW5nZWQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc3RhclJhdGluZ1N1YmplY3QubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBnZXRTdGFydFJhdGluZ0NoYW5nZWRPYnNlcnZhYmxlKCk6IFN1YmplY3Q8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhclJhdGluZ1N1YmplY3Q7XG4gIH1cblxuICBwdWJsaXNoVG9waWModG9waWM6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudG9waWNTdWJqZWN0Lm5leHQoeyB0b3BpYywgdmFsdWUgfSk7XG4gIH1cblxuICBnZXRUb3BpY09ic2VydmFibGUoa2V5KTogU3ViamVjdDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy50b3BpY1N1YmplY3Rba2V5XTtcbiAgfVxufVxuIl19