import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class IonicRatingService {
    private starRatingSubject;
    private topicSubject;
    publishStartRatingChanged(value: number): void;
    getStartRatingChangedObservable(): Subject<any>;
    publishTopic(topic: string, value: number): void;
    getTopicObservable(key: any): Subject<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IonicRatingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IonicRatingService>;
}
