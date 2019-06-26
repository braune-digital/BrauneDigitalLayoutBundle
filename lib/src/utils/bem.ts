export class Bem {

    private base: string;

    constructor(base: string) {
        this.base = base;
    }

    public setMods(base, mods: Array<any>) {
        mods.unshift(base);
        const preparedMods = mods.filter(element => element);
        return preparedMods.join(' ');
    }

    public setModifier(attr, prefix = '') {
        let modifier: string = '';
        if (attr != null) {
            modifier = this.base + '--' + prefix + attr;
        }
        return modifier;
    }

    public checkModifier(attr, val) {
        if (attr != null && attr) {
            return this.setModifier(val);
        }
    }

}
