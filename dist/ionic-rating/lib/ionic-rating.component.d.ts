import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IonicRatingService } from './ionic-rating.service';
import * as i0 from "@angular/core";
export declare class IonicRatingComponent implements ControlValueAccessor, OnInit {
    private ionicRatingService;
    set rating(val: number);
    get rating(): number;
    constructor(ionicRatingService: IonicRatingService);
    private _rating;
    private onChange;
    private onTouched;
    disabled: boolean;
    Math: any;
    parseFloat: any;
    iconsArray: number[];
    ratingChanged: EventEmitter<number>;
    readonly: string;
    activeColor: string;
    defaultColor: string;
    activeIcon: string;
    defaultIcon: string;
    halfIcon: string;
    halfStar: string;
    maxRating: number;
    fontSize: string;
    readonly eventInfo: {
        topic: string;
    };
    ngOnInit(): void;
    writeValue(obj: number): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    changeRating(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IonicRatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IonicRatingComponent, "ionic-rating-component", never, { "rating": "rating"; "readonly": "readonly"; "activeColor": "activeColor"; "defaultColor": "defaultColor"; "activeIcon": "activeIcon"; "defaultIcon": "defaultIcon"; "halfIcon": "halfIcon"; "halfStar": "halfStar"; "maxRating": "maxRating"; "fontSize": "fontSize"; }, { "ratingChanged": "ratingChanged"; }, never, never>;
}
