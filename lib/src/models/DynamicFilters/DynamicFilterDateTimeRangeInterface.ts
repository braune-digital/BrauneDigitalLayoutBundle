export interface DynamicFilterDateTimeRangeInterface {
    id: number;
    position: number;
    editable: boolean;
    type: string;
    property: string;
    name: string;
    lowerDate: Date;
    upperDate: Date;
}
