declare module 'react-slick' {
    import { Component } from 'react';

    interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        pauseOnHover?: boolean;
        beforeChange?: (current: number, next: number) => void;
        afterChange?: (current: number) => void;
    }

    export default class Slider extends Component<Settings> {}
}