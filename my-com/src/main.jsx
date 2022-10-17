import { defineComponent } from "vue";
import { makeStringProp } from "./utils";
export const HelloWorld = defineComponent({
    name: "HelloWorld",
    props: {
        msg: makeStringProp("aaa"),
    },
    setup(props) {
        return () => (<div>
        <h1>
          hello world!
          <br />
          {props.msg}
        </h1>
      </div>);
    },
});
