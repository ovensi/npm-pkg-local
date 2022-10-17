declare type Names = "aaa" | "bbb" | "ccc";
export declare const HelloWorld: import("vue").DefineComponent<{
    msg: {
        type: import("vue").PropType<Names>;
        default: Names;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    msg: {
        type: import("vue").PropType<Names>;
        default: Names;
    };
}>>, {
    msg: Names;
}>;
export {};
