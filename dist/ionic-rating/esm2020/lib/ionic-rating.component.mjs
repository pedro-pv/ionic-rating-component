import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./ionic-rating.service";
import * as i2 from "@ionic/angular";
import * as i3 from "@angular/common";
export class IonicRatingComponent {
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
IonicRatingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonicRatingComponent, deps: [{ token: i1.IonicRatingService }], target: i0.ɵɵFactoryTarget.Component });
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
        }], ctorParameters: function () { return [{ type: i1.IonicRatingService }]; }, propDecorators: { rating: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtcmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW9uaWMtcmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUEyQnpFLE1BQU0sT0FBTyxvQkFBb0I7SUFlL0IsWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFVMUQsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUUxQixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWpFLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFFM0IsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFFaEMsaUJBQVksR0FBVyxTQUFTLENBQUM7UUFFakMsZUFBVSxHQUFXLE1BQU0sQ0FBQztRQUU1QixnQkFBVyxHQUFXLGNBQWMsQ0FBQztRQUVyQyxhQUFRLEdBQVcsV0FBVyxDQUFDO1FBRS9CLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFFM0IsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixhQUFRLEdBQVcsTUFBTSxDQUFDO1FBRVYsY0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ2hDLE1BQU0sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEMsTUFBTSxLQUFLLEdBQUcsZUFBZSxFQUFFLFVBQVUsQ0FBQztZQUMxQyxPQUFPO2dCQUNMLEtBQUs7YUFDTixDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQXJDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBakJELElBQ1csTUFBTSxDQUFDLEdBQVc7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBR0QsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUEyQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxzQ0FBc0M7UUFDdEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFFLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTTtZQUFFLE9BQU87UUFDdEQsNENBQTRDO1FBQzVDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtZQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDeEY7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QjtRQUNELDBFQUEwRTtRQUMxRSxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLGVBQWU7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7a0hBNUZVLG9CQUFvQjtzR0FBcEIsb0JBQW9CLDRWQVJwQjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRiwwQkFwQlM7Ozs7OztHQU1UOzRGQWdCVSxvQkFBb0I7a0JBeEJoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRTs7Ozs7O0dBTVQsRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Ozs7OztHQU9YLENBQUM7b0JBQ0YsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsc0JBQXNCOzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjt5R0FHWSxNQUFNO3NCQURoQixLQUFLO2dCQTBCTixhQUFhO3NCQURaLE1BQU07Z0JBR1AsUUFBUTtzQkFEUCxLQUFLO2dCQUdOLFdBQVc7c0JBRFYsS0FBSztnQkFHTixZQUFZO3NCQURYLEtBQUs7Z0JBR04sVUFBVTtzQkFEVCxLQUFLO2dCQUdOLFdBQVc7c0JBRFYsS0FBSztnQkFHTixRQUFRO3NCQURQLEtBQUs7Z0JBR04sUUFBUTtzQkFEUCxLQUFLO2dCQUdOLFNBQVM7c0JBRFIsS0FBSztnQkFHTixRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJb25pY1JhdGluZ1NlcnZpY2UgfSBmcm9tICcuL2lvbmljLXJhdGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uaWMtcmF0aW5nLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImlvbmljNS1zdGFyLXJhdGluZ1wiPlxuICAgICAgPGlvbi1idXR0b24gc2l6ZT1cImxhcmdlXCIgZmlsbD1cImNsZWFyXCIgY2xhc3M9XCJyYXRlLWJ1dHRvblwiIFtuZ1N0eWxlXT1cInsnd2lkdGgnIDogZm9udFNpemUsICdoZWlnaHQnIDogZm9udFNpemV9XCIgKm5nRm9yPVwibGV0IGluZGV4IG9mIGljb25zQXJyYXlcIiBpZD1cInt7aW5kZXh9fVwiIChjbGljayk9XCJjaGFuZ2VSYXRpbmcoJGV2ZW50KVwiPlxuICAgICAgICA8aW9uLWljb24gW25nU3R5bGVdPVwieydjb2xvcic6ICgoaGFsZlN0YXIgPT09ICdmYWxzZScgJiYgaW5kZXggPCB0aGlzLk1hdGgucm91bmQodGhpcy5wYXJzZUZsb2F0KHJhdGluZykpKSB8fCAoaGFsZlN0YXIgPT09ICd0cnVlJyAmJiBpbmRleCA8IHRoaXMucGFyc2VGbG9hdChyYXRpbmcpKSkgPyBhY3RpdmVDb2xvciA6IGRlZmF1bHRDb2xvciwgJ2ZvbnQtc2l6ZScgOiBmb250U2l6ZSB9XCIgbmFtZT1cInt7KGhhbGZTdGFyID09PSd0cnVlJyAmJiAocmF0aW5nIC0gaW5kZXggPiAwKSAmJiAocmF0aW5nIC0gaW5kZXggPD0gMC41KSkgPyBoYWxmSWNvbiA6IChpbmRleCA8IHRoaXMuTWF0aC5yb3VuZCh0aGlzLnBhcnNlRmxvYXQocmF0aW5nKSkpID8gYWN0aXZlSWNvbiA6IGRlZmF1bHRJY29ufX1cIj48L2lvbi1pY29uPlxuICAgICAgPC9pb24tYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgLCBzdHlsZXM6IFtgXG4gICAgLnJhdGUtYnV0dG9uIHtcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206MDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6MDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDowO1xuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDowO1xuICAgIH1cbiAgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IElvbmljUmF0aW5nQ29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSW9uaWNSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgQElucHV0KClcbiAgcHVibGljIHNldCByYXRpbmcodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yYXRpbmcgPSB2YWw7XG4gICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcbiAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyBnZXQgcmF0aW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JhdGluZztcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpb25pY1JhdGluZ1NlcnZpY2U6IElvbmljUmF0aW5nU2VydmljZSkge1xuICAgIHRoaXMuTWF0aCA9IE1hdGg7XG4gICAgdGhpcy5wYXJzZUZsb2F0ID0gcGFyc2VGbG9hdDtcbiAgfVxuICBwcml2YXRlIF9yYXRpbmc6IG51bWJlcjtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogYW55O1xuICBwcml2YXRlIG9uVG91Y2hlZDogYW55O1xuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIE1hdGg6IGFueTtcbiAgcGFyc2VGbG9hdDogYW55O1xuICBpY29uc0FycmF5OiBudW1iZXJbXSA9IFtdO1xuICBAT3V0cHV0KClcbiAgcmF0aW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQElucHV0KClcbiAgcmVhZG9ubHk6IHN0cmluZyA9ICdmYWxzZSc7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZUNvbG9yOiBzdHJpbmcgPSAnIzQ4OGFmZic7XG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRDb2xvcjogc3RyaW5nID0gJyNhYWFhYWEnO1xuICBASW5wdXQoKVxuICBhY3RpdmVJY29uOiBzdHJpbmcgPSAnc3Rhcic7XG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRJY29uOiBzdHJpbmcgPSAnc3Rhci1vdXRsaW5lJztcbiAgQElucHV0KClcbiAgaGFsZkljb246IHN0cmluZyA9ICdzdGFyLWhhbGYnO1xuICBASW5wdXQoKVxuICBoYWxmU3Rhcjogc3RyaW5nID0gJ2ZhbHNlJztcbiAgQElucHV0KClcbiAgbWF4UmF0aW5nOiBudW1iZXIgPSA1O1xuICBASW5wdXQoKVxuICBmb250U2l6ZTogc3RyaW5nID0gJzI4cHgnO1xuXG4gIHB1YmxpYyByZWFkb25seSBldmVudEluZm8gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgdG9waWMgPSBgc3Rhci1yYXRpbmc6JHtpZH06Y2hhbmdlZGA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcGljLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yYXRpbmcgPSB0aGlzLnJhdGluZyB8fCAzOyAvL2RlZmF1bHQgYWZ0ZXIgaW5wdXRgcyBpbml0aWFsaXphdGlvblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhSYXRpbmc7IGkrKykge1xuICAgICAgdGhpcy5pY29uc0FycmF5LnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmF0aW5nID0gb2JqO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZWFkb25seSA9IGlzRGlzYWJsZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcbiAgfVxuXG4gIGNoYW5nZVJhdGluZyhldmVudCkge1xuICAgIGlmICh0aGlzLnJlYWRvbmx5ICYmIHRoaXMucmVhZG9ubHkgPT09ICd0cnVlJykgcmV0dXJuO1xuICAgIC8vIGV2ZW50IGlzIGRpZmZlcmVudCBmb3IgZmlyZWZveCBhbmQgY2hyb21lXG4gICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmlkID8gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkKSA6IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICBpZiAodGhpcy5oYWxmU3RhciAmJiB0aGlzLmhhbGZTdGFyID09PSAndHJ1ZScpIHtcbiAgICAgIHRoaXMucmF0aW5nID0gKCh0aGlzLnJhdGluZyAtIGlkID4gMCkgJiYgKHRoaXMucmF0aW5nIC0gaWQgPD0gMC41KSkgPyBpZCArIDEgOiBpZCArIC41O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJhdGluZyA9IGlkICsgMTtcbiAgICB9XG4gICAgLy8gc3Vic2NyaWJlIHRoaXMgZXZlbnQgdG8gZ2V0IHRoZSBjaGFuZ2VkIHZhbHVlIGluIHlvdXIgcGFyZW50IGNvbXBvYW5lbnRcbiAgICB0aGlzLmlvbmljUmF0aW5nU2VydmljZS5wdWJsaXNoU3RhcnRSYXRpbmdDaGFuZ2VkKHRoaXMucmF0aW5nKTtcbiAgICB0aGlzLmlvbmljUmF0aW5nU2VydmljZS5wdWJsaXNoVG9waWModGhpcy5ldmVudEluZm8udG9waWMsIHRoaXMucmF0aW5nKTtcbiAgICAvLyB1bmlxdWUgZXZlbnRcbiAgICB0aGlzLnJhdGluZ0NoYW5nZWQuZW1pdCh0aGlzLnJhdGluZyk7XG4gIH1cbn1cbiJdfQ==