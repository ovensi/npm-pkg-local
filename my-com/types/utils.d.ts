import { PropType } from "vue";
export declare const makeStringProp: <T>(defaultVal: T) => {
    type: PropType<T>;
    default: T;
};
