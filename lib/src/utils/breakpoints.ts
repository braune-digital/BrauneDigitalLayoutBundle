export class Breakpoints {

    private breakpoints = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1350,
        xxxl: 1500
    };

    private w = window;

    constructor() {
    }

    public down(breakpoint) {
        if (this.breakpoints[breakpoint] === undefined) {
            return console.log('Breakpoint not definded');
        }

        return this.w.innerWidth < this.breakpoints[breakpoint];
    }

    public up(breakpoint) {

        if (this.breakpoints[breakpoint] === undefined) {
            return console.log('Breakpoint not definded');
        }

        return this.w.innerWidth > this.breakpoints[breakpoint];
    }

}
