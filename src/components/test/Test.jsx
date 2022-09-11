
import { defineComponent, h } from 'vue';

export default defineComponent({
    
  setup(props, context){
        const subpart = props.inside;
        console.log(subpart);
            return ()=>
                (            
                <div>
                    <slot></slot>
                </div>
                )
        }

    
}
);

