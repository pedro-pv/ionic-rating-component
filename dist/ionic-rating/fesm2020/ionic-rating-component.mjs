import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i2 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

class IonicRatingService {
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

class IonicRatingComponent {
    constructor(ionicRatingService) {
        this.ionicRatingService = ionicRatingService;
        this.iconsArray = [];
        this.ratingChanged = new EventEmitter();
        this.readonly = 'false';
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'star';
        this.defaultIcon = 'star-outline';
        this.halfIcon = 'star-half';
        this.halfStar = 'false';
        this.maxRating = 5;
        this.fontSize = '28px';
        this.eventInfo = (() => {
            const id = new Date().getTime();
            const topic = `star-rating:${id}:changed`;
            return {
                topic,
            };
        })();
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    set rating(val) {
        this._rating = val;
        if (this.onChange) {
            this.onChange(val);
        }
    }
    get rating() {
        return this._rating;
    }
    ngOnInit() {
        this.rating = this.rating || 3; //default after input`s initialization
        for (let i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    }
    writeValue(obj) {
        this.rating = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    }
    changeRating(event) {
        if (this.readonly && this.readonly === 'true')
            return;
        // event is different for firefox and chrome
        let id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === 'true') {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // subscribe this event to get the changed value in your parent compoanent
        this.ionicRatingService.publishStartRatingChanged(this.rating);
        this.ionicRatingService.publishTopic(this.eventInfo.topic, this.rating);
        // unique event
        this.ratingChanged.emit(this.rating);
    }
}
IonicRatingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonicRatingComponent, deps: [{ token: IonicRatingService }], target: i0.ɵɵFactoryTarget.Component });
IonicRatingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: IonicRatingComponent, selector: "ionic-rating-component", inputs: { rating: "rating", readonly: "readonly", activeColor: "activeColor", defaultColor: "defaultColor", activeIcon: "activeIcon", defaultIcon: "defaultIcon", halfIcon: "halfIcon", halfStar: "halfStar", maxRating: "maxRating", fontSize: "fontSize" }, outputs: { ratingChanged: "ratingChanged" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: IonicRatingComponent,
            multi: true,
        },
    ], ngImport: i0, template: `
    <div class="ionic5-star-rating">
      <ion-button size="large" fill="clear" class="rate-button" [ngStyle]="{'width' : fontSize, 'height' : fontSize}" *ngFor="let index of iconsArray" id="{{index}}" (click)="changeRating($event)">
        <ion-icon [ngStyle]="{'color': ((halfStar === 'false' && index < this.Math.round(this.parseFloat(rating))) || (halfStar === 'true' && index < this.parseFloat(rating))) ? activeColor : defaultColor, 'font-size' : fontSize }" name="{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}"></ion-icon>
      </ion-button>
    </div>
  `, isInline: true, styles: [".rate-button{--padding-bottom:0;--padding-end:0;--padding-start:0;--padding-top:0}\n"], components: [{ type: i2.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i2.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonicRatingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ionic-rating-component',
                    template: `
    <div class="ionic5-star-rating">
      <ion-button size="large" fill="clear" class="rate-button" [ngStyle]="{'width' : fontSize, 'height' : fontSize}" *ngFor="let index of iconsArray" id="{{index}}" (click)="changeRating($event)">
        <ion-icon [ngStyle]="{'color': ((halfStar === 'false' && index < this.Math.round(this.parseFloat(rating))) || (halfStar === 'true' && index < this.parseFloat(rating))) ? activeColor : defaultColor, 'font-size' : fontSize }" name="{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}"></ion-icon>
      </ion-button>
    </div>
  `, styles: [`
    .rate-button {
            --padding-bottom:0;
            --padding-end:0;
            --padding-start:0;
            --padding-top:0;
    }
  `],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: IonicRatingComponent,
                            multi: true,
                        },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: IonicRatingService }]; }, propDecorators: { rating: [{
                type: Input
            }], ratingChanged: [{
                type: Output
            }], readonly: [{
                type: Input
            }], activeColor: [{
                type: Input
            }], defaultColor: [{
                type: Input
            }], activeIcon: [{
                type: Input
            }], defaultIcon: [{
                type: Input
            }], halfIcon: [{
                type: Input
            }], halfStar: [{
                type: Input
            }], maxRating: [{
                type: Input
            }], fontSize: [{
                type: Input
            }] } });

class IonicRatingComponentModule {
}
IonicRatingComponentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonicRatingComponentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IonicRatingComponentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonicRatingComponentModule, declarations: [IonicRatingComponent], imports: [CommonModule,
        IonicModule], exports: [IonicRatingComponent] });
IonicRatingComponentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonicRatingComponentModule, imports: [[
            CommonModule,
            IonicModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonicRatingComponentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [IonicRatingComponent],
                    imports: [
                        CommonModule,
                        IonicModule,
                    ],
                    exports: [IonicRatingComponent]
                }]
        }] });

/*
 * Public API Surface of ionic-rating
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IonicRatingComponent, IonicRatingComponentModule, IonicRatingService };
//# sourceMappingURL=ionic-rating-component.mjs.map
